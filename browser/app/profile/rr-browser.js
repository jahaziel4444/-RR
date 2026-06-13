// =====================================================
// #RR Browser — user.js
// Privacy MAXIMUM + Performance MAXIMUM
// Based on: arkenfox, betterfox, librewolf hardening
// "No one watches you here."
// =====================================================

// =====================================================
// [SECTION 1] — TELEMETRY & DATA COLLECTION — ALL OFF
// =====================================================
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.sessions.current.clean", true);
user_pref("devtools.onboarding.telemetry.logged", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

// =====================================================
// [SECTION 2] — CRASH REPORTS — ALL OFF
// =====================================================
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

// =====================================================
// [SECTION 3] — STUDIES & EXPERIMENTS — ALL OFF
// =====================================================
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("messaging-system.rsexperimentloader.collection_id", "");

// =====================================================
// [SECTION 4] — SAFE BROWSING (Google) — REMOVED
// We block malware at the DNS/uBlock level instead
// =====================================================
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", "");
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);

// =====================================================
// [SECTION 5] — NETWORK PRIVACY
// =====================================================
// DNS over HTTPS — Cloudflare by default, user can change
user_pref("network.trr.mode", 3);
user_pref("network.trr.uri", "https://1.1.1.1/dns-query");
user_pref("network.trr.custom_uri", "https://1.1.1.1/dns-query");
user_pref("network.trr.bootstrapAddress", "1.1.1.1");

// Disable IPv6 leak potential
user_pref("network.dns.disableIPv6", true);

// WebRTC — prevent IP leaks
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true);
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);

// Disable Prefetch
user_pref("network.prefetch-next", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.predictor.enabled", false);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("browser.places.speculativeConnect.enabled", false);

// Referrer Policy — strict
user_pref("network.http.referer.XOriginPolicy", 2);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

// Disable HTTP Alternative Services (QUIC coalescing leaks)
user_pref("network.http.altsvc.enabled", false);
user_pref("network.http.altsvc.oe", false);

// Proxy bypass protection
user_pref("network.gio.supported-protocols", "");
user_pref("network.file.disable_unc_paths", true);
user_pref("network.manage-offline-status", false);

// =====================================================
// [SECTION 6] — FINGERPRINT RESISTANCE
// =====================================================
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);
user_pref("privacy.resistFingerprinting.letterboxing", false); // Off by default, user can enable
user_pref("browser.display.use_system_colors", false);
user_pref("browser.link.open_newwindow", 3);
user_pref("browser.link.open_newwindow.restriction", 0);

// Canvas fingerprint protection
user_pref("canvas.capturestream.enabled", false);

// Timezone fingerprint
user_pref("javascript.use_us_english_locale", true);

// Fonts fingerprint
user_pref("browser.display.use_document_fonts", 0);

// Disable battery API
user_pref("dom.battery.enabled", false);

// Disable device sensors
user_pref("device.sensors.enabled", false);

// Disable gamepad API
user_pref("dom.gamepad.enabled", false);

// Disable VR API
user_pref("dom.vr.enabled", false);

// Disable media device enumeration
user_pref("media.navigator.enabled", false);

// Disable speech API
user_pref("media.webspeech.recognition.enable", false);

// Disable network info API
user_pref("dom.netinfo.enabled", false);

// =====================================================
// [SECTION 7] — TRACKING PROTECTION — MAX
// =====================================================
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.pbmode.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
user_pref("privacy.socialtracking.block_cookies.enabled", true);

// Enhanced Tracking Protection — STRICT
user_pref("browser.contentblocking.category", "strict");

// First Party Isolation
user_pref("privacy.firstparty.isolate", true);
user_pref("privacy.firstparty.isolate.restrict_opener_access", true);

// Strict cookie policy
user_pref("network.cookie.cookieBehavior", 5);
user_pref("network.cookie.lifetimePolicy", 2);
user_pref("network.cookie.thirdparty.sessionOnly", true);
user_pref("network.cookie.thirdparty.nonsecureSessionOnly", true);

// =====================================================
// [SECTION 8] — SEARCH — DUCKDUCKGO BY DEFAULT
// =====================================================
user_pref("browser.search.defaultenginename", "DuckDuckGo");
user_pref("browser.search.order.1", "DuckDuckGo");
user_pref("keyword.URL", "https://duckduckgo.com/?q=");
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.bookmark", true);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.urlbar.trimURLs", false);

// =====================================================
// [SECTION 9] — MOZILLA SERVICES — ALL OFF
// =====================================================
user_pref("identity.fxaccounts.enabled", false);
user_pref("identity.fxaccounts.toolbar.enabled", false);
user_pref("identity.fxaccounts.pairing.enabled", false);
user_pref("services.sync.enabled", false);
user_pref("browser.pocket.enabled", false);
user_pref("extensions.pocket.enabled", false);
user_pref("browser.pocket.api", "");
user_pref("browser.pocket.site", "");
user_pref("browser.vpn_promo.enabled", false);
user_pref("browser.promo.focus.enabled", false);
user_pref("browser.promo.pin.enabled", false);
user_pref("browser.firefox-view.enabled", false);
user_pref("browser.tabs.firefox-view", false);
user_pref("browser.tabs.firefox-view-next", false);

// Disable Relay
user_pref("signon.firefoxRelay.feature", "disabled");

// Disable Suggest (ad-based)
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.quicksuggest.dataCollection.enabled", false);
user_pref("browser.urlbar.firefox-suggest.enabled", false);
user_pref("browser.urlbar.mdn-suggest.enabled", false);
user_pref("browser.urlbar.trending.featureGate", false);
user_pref("browser.urlbar.addons.featureGate", false);
user_pref("browser.urlbar.yelp.featureGate", false);

// =====================================================
// [SECTION 10] — NEW TAB PAGE — CLEAN & MINIMAL
// =====================================================
user_pref("browser.startup.homepage", "about:blank");
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.activity-stream.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.newtabpage.activity-stream.system.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.enabled", false);

// =====================================================
// [SECTION 11] — PERFORMANCE OPTIMIZATION
// Based on Betterfox + custom tweaks
// =====================================================

// --- Content process ---
user_pref("dom.ipc.processCount", 8);
user_pref("dom.ipc.processCount.web", 8);

// --- GPU Acceleration ---
user_pref("gfx.webrender.all", true);
user_pref("gfx.webrender.enabled", true);
user_pref("gfx.webrender.compositor", true);
user_pref("gfx.webrender.compositor.force-enabled", true);
user_pref("layers.acceleration.force-enabled", true);
user_pref("media.hardware-video-decoding.enabled", true);
user_pref("media.hardware-video-decoding.force-enabled", true);
user_pref("media.gpu-process-decoder", true);

// --- Memory & GC ---
user_pref("javascript.options.mem.high_water_mark", 128);
user_pref("javascript.options.mem.gc_high_frequency_time_limit_ms", 1000);
user_pref("javascript.options.mem.gc_low_frequency_heap_growth", 150);
user_pref("javascript.options.mem.gc_high_frequency_heap_growth_max", 300);
user_pref("javascript.options.mem.gc_high_frequency_high_limit_mb", 500);
user_pref("javascript.options.mem.gc_high_frequency_low_limit_mb", 100);
user_pref("javascript.options.mem.gc_max_empty_chunk_count", 30);
user_pref("javascript.options.mem.gc_min_empty_chunk_count", 1);

// --- HTTP/3 & QUIC ---
user_pref("network.http.http3.enabled", true);

// --- Cache ---
user_pref("browser.cache.disk.enable", true);
user_pref("browser.cache.disk.capacity", 512000);
user_pref("browser.cache.memory.enable", true);
user_pref("browser.cache.memory.capacity", 65536);
user_pref("browser.cache.offline.enable", false);

// --- Smooth scrolling ---
user_pref("general.smoothScroll", true);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 650);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25);
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);
user_pref("general.smoothScroll.currentVelocityWeighting", "0.15");
user_pref("general.smoothScroll.stopDecelerationWeighting", "0.6");
user_pref("mousewheel.min_line_scroll_amount", 22);

// --- Reduce layout reflows ---
user_pref("nglayout.initialpaint.delay", 0);
user_pref("nglayout.initialpaint.delay_in_oopif", 0);
user_pref("content.notify.interval", 100000);

// --- Tab loading ---
user_pref("browser.tabs.loadDivertedInBackground", false);

// =====================================================
// [SECTION 12] — SECURITY HARDENING
// =====================================================

// HTTPS Only Mode
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_pbm", true);
user_pref("dom.security.https_only_mode.upgrade_local", true);

// Disable mixed content
user_pref("security.mixed_content.block_active_content", true);
user_pref("security.mixed_content.block_display_content", true);
user_pref("security.mixed_content.upgrade_display_content", true);

// TLS — minimum TLS 1.2
user_pref("security.tls.version.min", 3);
user_pref("security.tls.version.max", 4);

// OCSP
user_pref("security.OCSP.require", true);
user_pref("security.OCSP.enabled", 1);

// Disable weak ciphers
user_pref("security.ssl3.rsa_des_ede3_sha", false);
user_pref("security.ssl3.rsa_rc4_128_md5", false);
user_pref("security.ssl3.rsa_rc4_128_sha", false);

// Certificate Transparency
user_pref("security.pki.certificate_transparency.mode", 2);

// Disable old protocols
user_pref("network.ftp.enabled", false);
user_pref("network.websocket.allowInsecureFromHTTPS", false);

// =====================================================
// [SECTION 13] — EXTENSIONS SECURITY
// =====================================================
// Only allow extensions from AMO
user_pref("extensions.postDownloadThirdPartyPrompt", false);
user_pref("extensions.InstallTrigger.enabled", false);
user_pref("xpinstall.whitelist.required", true);
user_pref("extensions.webextensions.restrictedDomains", "");

// =====================================================
// [SECTION 14] — MISC CLEANUP
// =====================================================
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.disableResetPrompt", true);
user_pref("browser.onboarding.enabled", false);
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");
user_pref("trailhead.firstrun.didSeeAboutWelcome", true);
user_pref("browser.startup.firstrunSkipsHomepage", true);

// Disable Screenshots built-in
user_pref("extensions.screenshots.disabled", true);

// Disable Reader Mode (can be re-enabled by user)
user_pref("reader.parse-on-load.enabled", false);

// Disable Accessibility services (fingerprint risk)
user_pref("accessibility.force_disabled", 1);

// Containers (enable for cookie isolation)
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);
