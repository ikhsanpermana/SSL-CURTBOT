(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) s(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const n of t.addedNodes)
          n.tagName === "LINK" && n.rel === "modulepreload" && s(n);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossOrigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    );
  }
  function s(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = r(e);
    fetch(e.href, t);
  }
})();
document.querySelector("#app").innerHTML = `
  <div>
    

  <div class="flex justify-between items-center gap-4 py-5">
    <div class="flex items-center bg-white/90 rounded-2xl p-4 w-32 h-32">
      <img src="./komdigi.png" alt="komdigi logo" />
    </div>
    <div class="mb-2 flex flex-col items-center justify-center text-red-800">
      <div class="text-xl lg:text-4xl font-bold uppercase">
        Situs Diblokir
      </div>
      <div class="text-sm lg:text-xl font-semibold capitalize italic">
        Website Blocked
      </div>
    </div>
    <div class="flex items-center bg-white/90 rounded-2xl p-4 h-32 w-32">
      <img src="./kahot.png" alt="Kahot logo" />
    </div>
  </div>

  <div class="max-w-4xl mx-auto">
    <div class="flex-col items-center justify-center mb-4 hidden">
      <div class="bg-red-600 w-24 h-24 rounded-full text-white flex items-center justify-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
          <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"
            d="M6 8.256L24.009 3L42 8.256v10.778A26.32 26.32 0 0 1 24.003 44A26.32 26.32 0 0 1 6 19.029z" />
        </svg>
      </div>
    </div>
    <div class="bg-white/90 rounded-2xl p-6 shadow-lg text-center border border-gray-200">
      <div class="bg-gray-100 text-gray-800 p-4 rounded-xl mb-6">
        <p class="text-gray-600 text-lg leading-7">
          UNDANG-UNDANG RI NOMOR 19 TAHUN 2016 PASAL 40 (2a) dan (2b) TENTANG INFORMASI DAN TRANSAKSI ELEKTRONIK
        </p>
        <p class="text-gray-600 text-base leading-6 mt-4 italic">
          Indonesian Law No. 19 of 2016 Article 40 (2a) and (2b) regarding Information and Transactions
        </p>
      </div>
      <!-- alert -->
      <div class="bg-red-100 text-red-800 p-4 rounded-xl">
        <p class="text-xl uppercase font-semibold mb-3">
          Maaf, Akses ke Situs Ini Diblokir oleh pemerintah indonesia karena mengandung konten negatif yang melanggar
          peraturan perundangan di indonesia
        </p>
        <p class="text-lg italic">
          Sorry, access to this site is blocked by the Indonesian government because it contains negative content that
          violates the laws and regulations in Indonesia.
        </p>
      </div>
    </div>
    <div class="mt-6 text-center font-semibold">
      <div class="italic">Contact</div>
      <div class="text-blue-600 hover:underline">
        <a href="mailto:aduankonten@mail.kominfo.go.id">
          aduankonten@mail.kominfo.go.id
        </a>
      </div>
    </div>
  </div>
  </div>
`;
