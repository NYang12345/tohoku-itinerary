(function () {
  "use strict";

  const tabbarEl = document.getElementById("tabbar");
  const panelEl = document.getElementById("dayPanel");
  const titleEl = document.getElementById("tripTitle");
  const subtitleEl = document.getElementById("tripSubtitle");

  if (itineraryData.trip) {
    titleEl.textContent = itineraryData.trip.title || titleEl.textContent;
    subtitleEl.textContent = itineraryData.trip.subtitle || subtitleEl.textContent;
  }

  const REFERENCE_ID = "ref";
  const FX_ID = "fx";
  let activeId = itineraryData.days[0].id;

  let fxRate = 0.2; // 1 JPY = 0.20 TWD, matches the source itinerary's budget table
  let fxJpy = 10000;

  // Minimal single-weight line-icon set (replaces emoji glyphs as UI icons)
  const ICONS = {
    pin: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-7.58 7-12a7 7 0 1 0-14 0c0 4.42 7 12 7 12z"/><circle cx="12" cy="9" r="2.3"/></svg>`,
    doc: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5z"/><path d="M14 3.5v4h4"/><path d="M9.5 13h6M9.5 16.5h6M9.5 9.5h2.5"/></svg>`,
    exchange: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7.5h13.5M17.5 7.5 14 4M17.5 7.5 14 11"/><path d="M20 16.5H6.5M6.5 16.5 10 13M6.5 16.5 10 20"/></svg>`
  };

  // A torii-gate glyph used as the day-tab shape, with the day number set
  // into the opening between the pillars — same drawn mark for every day,
  // recolored via currentColor to match each tab's active/inactive state.
  // Rendered as a light single-weight outline (matching the pin/doc/exchange
  // icons) rather than a solid silhouette, for a more refined, drawn feel.
  function toriiIcon(dayNumber) {
    return `<svg class="torii-icon" viewBox="0 0 48 42" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M3 9.5c2.5-2.3 7-3.5 21-3.5s18.5 1.2 21 3.5"/>
      <line x1="7" y1="13.5" x2="41" y2="13.5"/>
      <line x1="12" y1="17" x2="12" y2="39.5"/>
      <line x1="36" y1="17" x2="36" y2="39.5"/>
      <line x1="12" y1="24" x2="36" y2="24"/>
      <text x="24" y="35" text-anchor="middle" font-family="'Noto Serif TC', serif" font-weight="700" font-size="12.5" fill="currentColor" stroke="none">D${dayNumber}</text>
    </svg>`;
  }

  function mapUrl(locationText) {
    return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(locationText);
  }

  function renderLocs(locs) {
    if (!locs || !locs.length) return "";
    const chips = locs
      .map(
        (loc) =>
          `<a class="event__loc" href="${mapUrl(loc)}" target="_blank" rel="noopener noreferrer">${ICONS.pin} ${escapeHtml(loc)}</a>`
      )
      .join("");
    return `<div class="event__locs">${chips}</div>`;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function renderStops(stops) {
    if (!stops || !stops.length) return "";
    const items = stops
      .map(
        (s) => `
        <li class="event__stop">
          <div class="event__stop-name">${escapeHtml(s.name)}${
            s.note ? ` <span class="event__stop-note">(${escapeHtml(s.note)})</span>` : ""
          }</div>
          ${renderLocs(s.loc)}
        </li>`
      )
      .join("");
    return `<ol class="event__stops">${items}</ol>`;
  }

  function renderSingleEvent(ev) {
    const timeText = ev.time && ev.time.length ? ev.time : "";
    return `
      <div class="event">
        <div class="event__time ${timeText ? "" : "is-empty"}">${escapeHtml(timeText)}</div>
        <div class="event__dot"></div>
        <div class="event__body">
          <p class="event__title">${escapeHtml(ev.title)}</p>
          <p class="event__desc">${escapeHtml(ev.desc)}</p>
          ${renderStops(ev.stops)}
          ${renderLocs(ev.loc)}
        </div>
      </div>`;
  }

  function renderDualEvent(ev, dayId, evIndex) {
    const groupName = `plan-${dayId}-${evIndex}`;
    const planButtons = ev.plans
      .map(
        (p, i) =>
          `<button type="button" class="plan-btn ${i === 0 ? "is-active" : ""}" data-plan-index="${i}">${escapeHtml(
            p.label
          )}</button>`
      )
      .join("");

    const planPanels = ev.plans
      .map((p, i) => {
        const evsHtml = p.events
          .map(
            (pe) => `
          <div class="event__body">
            <p class="event__title">${escapeHtml(pe.title)}</p>
            <p class="event__desc">${escapeHtml(pe.desc)}</p>
            ${renderLocs(pe.loc)}
          </div>`
          )
          .join("");
        return `<div class="plan-events" data-plan-panel="${i}" style="${i === 0 ? "" : "display:none;"}">${evsHtml}</div>`;
      })
      .join("");

    return `
      <div class="event">
        <div class="event__time">${escapeHtml(ev.time)}</div>
        <div class="event__dot"></div>
        <div class="event__body is-dual" data-plan-group="${groupName}">
          <p class="dual-note">${escapeHtml(ev.note)}</p>
          <div class="plan-toggle">${planButtons}</div>
          ${planPanels}
        </div>
      </div>`;
  }

  function renderDay(day) {
    const eventsHtml = day.events
      .map((ev, i) => (ev.dual ? renderDualEvent(ev, day.id, i) : renderSingleEvent(ev)))
      .join("");

    panelEl.innerHTML = `
      <div class="fade-enter">
        <h2 class="day-route">
          <span class="day-route__day">Day ${day.id}</span>
          <span class="day-route__date">${escapeHtml(day.date)}（${escapeHtml(day.weekday)}）</span>
        </h2>
        <p class="day-route__desc">${escapeHtml(day.route)}</p>
        <div class="timeline">${eventsHtml}</div>
      </div>`;

    wirePlanToggles();
  }

  function wirePlanToggles() {
    panelEl.querySelectorAll("[data-plan-group]").forEach((group) => {
      const buttons = group.querySelectorAll(".plan-btn");
      buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const idx = btn.getAttribute("data-plan-index");
          buttons.forEach((b) => b.classList.toggle("is-active", b === btn));
          group.querySelectorAll("[data-plan-panel]").forEach((panel) => {
            panel.style.display = panel.getAttribute("data-plan-panel") === idx ? "" : "none";
          });
        });
      });
    });
  }

  function refRow(cells, isTotal) {
    return `<tr${isTotal ? ' class="is-total"' : ""}>${cells
      .map((c) => `<td>${escapeHtml(c)}</td>`)
      .join("")}</tr>`;
  }

  function refTable(headers, rows) {
    const thead = `<tr>${headers.map((h) => `<th>${escapeHtml(h)}</th>`).join("")}</tr>`;
    const tbody = rows
      .map((r) => refRow(r, r[0] === "總計"))
      .join("");
    return `<div class="table-wrap"><table class="ref-table"><thead>${thead}</thead><tbody>${tbody}</tbody></table></div>`;
  }

  function renderReference() {
    const ref = itineraryData.reference;
    panelEl.innerHTML = `
      <div class="fade-enter">
        <h2 class="day-route">
          <span class="day-route__day">參考資料</span>
        </h2>
        <p class="day-route__desc">健行概要、交通票券與預算明細一覽</p>

        <section class="ref-section">
          <h2>二、健行概要</h2>
          ${refTable(ref.hiking.headers, ref.hiking.rows)}
        </section>

        <section class="ref-section">
          <h2>四、交通預訂與取票</h2>
          ${refTable(ref.transport.headers, ref.transport.rows)}
        </section>

        <section class="ref-section">
          <h2>五、預算明細表</h2>
          ${refTable(ref.budgetDetail.headers, ref.budgetDetail.rows)}
        </section>

        <section class="ref-section">
          <h2>八日個人費用預算總彙整表</h2>
          ${refTable(ref.budgetSummary.headers, ref.budgetSummary.rows)}
          <p class="ref-note">${escapeHtml(ref.note)}</p>
        </section>
      </div>`;
  }

  function renderCurrency() {
    const ntd = fxJpy * fxRate;
    panelEl.innerHTML = `
      <div class="fade-enter">
        <h2 class="day-route">
          <span class="day-route__day">匯率換算</span>
        </h2>
        <p class="day-route__desc">日圓與新台幣互換，方便隨時估算花費</p>
        <div class="fx-card">
          <label class="fx-field">
            <span>匯率（1 日圓 JPY = 多少新台幣 TWD）</span>
            <input type="number" inputmode="decimal" id="fxRateInput" step="0.001" min="0" value="${fxRate}">
          </label>
          <div class="fx-row">
            <label class="fx-field">
              <span>日圓 JPY ¥</span>
              <input type="number" inputmode="decimal" id="fxJpyInput" step="1" min="0" value="${fxJpy}">
            </label>
            <span class="fx-equals">⇄</span>
            <label class="fx-field">
              <span>新台幣 NTD $</span>
              <input type="number" inputmode="decimal" id="fxNtdInput" step="1" min="0" value="${round2(ntd)}">
            </label>
          </div>
          <p class="fx-note">預設匯率取自本行程預算表的換算基準 (1 JPY = 0.20 TWD)，僅供旅費估算，正確匯率請以實際兌換或銀行公告為準；上方匯率欄位可自行修改。</p>
        </div>
      </div>`;

    wireCurrencyInputs();
  }

  function round2(n) {
    return Math.round(n * 100) / 100;
  }

  function wireCurrencyInputs() {
    const rateInput = document.getElementById("fxRateInput");
    const jpyInput = document.getElementById("fxJpyInput");
    const ntdInput = document.getElementById("fxNtdInput");
    if (!rateInput || !jpyInput || !ntdInput) return;

    jpyInput.addEventListener("input", () => {
      const jpy = parseFloat(jpyInput.value);
      fxJpy = isNaN(jpy) ? 0 : jpy;
      const rate = parseFloat(rateInput.value);
      fxRate = isNaN(rate) ? fxRate : rate;
      ntdInput.value = round2(fxJpy * fxRate);
    });

    ntdInput.addEventListener("input", () => {
      const ntd = parseFloat(ntdInput.value);
      const rate = parseFloat(rateInput.value);
      fxRate = isNaN(rate) ? fxRate : rate;
      const jpy = fxRate > 0 && !isNaN(ntd) ? ntd / fxRate : 0;
      fxJpy = jpy;
      jpyInput.value = round2(jpy);
    });

    rateInput.addEventListener("input", () => {
      const rate = parseFloat(rateInput.value);
      fxRate = isNaN(rate) ? fxRate : rate;
      const jpy = parseFloat(jpyInput.value);
      fxJpy = isNaN(jpy) ? fxJpy : jpy;
      ntdInput.value = round2(fxJpy * fxRate);
    });
  }

  function renderActive() {
    if (activeId === REFERENCE_ID) {
      renderReference();
    } else if (activeId === FX_ID) {
      renderCurrency();
    } else {
      const day = itineraryData.days.find((d) => d.id === activeId);
      renderDay(day);
    }
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }

  function buildTabs() {
    const dayTabs = itineraryData.days
      .map(
        (d) => `
      <button type="button" class="tab" data-id="${d.id}">
        <span class="tab__day">${toriiIcon(d.id)}</span>
        <span class="tab__date">${escapeHtml(d.date)}</span>
      </button>`
      )
      .join("");

    const refTab = `
      <button type="button" class="tab is-reference" data-id="${REFERENCE_ID}">
        <span class="tab__day">${ICONS.doc}</span>
        <span class="tab__date">參考</span>
      </button>`;

    const fxTab = `
      <button type="button" class="tab is-fx" data-id="${FX_ID}">
        <span class="tab__day">${ICONS.exchange}</span>
        <span class="tab__date">匯率</span>
      </button>`;

    tabbarEl.innerHTML = dayTabs + refTab + fxTab;

    tabbarEl.querySelectorAll(".tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        const rawId = btn.getAttribute("data-id");
        activeId = rawId === REFERENCE_ID || rawId === FX_ID ? rawId : Number(rawId);
        updateActiveTab();
        renderActive();
      });
    });

    updateActiveTab();
  }

  function updateActiveTab() {
    tabbarEl.querySelectorAll(".tab").forEach((btn) => {
      const rawId = btn.getAttribute("data-id");
      const id = rawId === REFERENCE_ID || rawId === FX_ID ? rawId : Number(rawId);
      btn.classList.toggle("is-active", id === activeId);
    });
  }

  buildTabs();
  renderActive();
})();
