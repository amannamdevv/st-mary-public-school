/**
 * ST. MARY PUBLIC SCHOOL - GLOBAL PAGE LOADER SCRIPT
 * Handles premium transitions between pages and initial load animations.
 */
(function() {
    // Ensure the loader element exists
    const loader = document.getElementById('page-loader');
    if (!loader) return;

    let isHidden = false;

    /**
     * Hides the loader forcefully and optimally.
     */
    function hideLoader() {
        if (isHidden) return;
        isHidden = true;
        
        // Hide immediately without relying on buggy performance timing APIs
        setTimeout(() => {
            if (loader) {
                loader.classList.add('hidden');
                document.body.style.overflow = '';
            }
        }, 500); // Only a graceful 500ms animation delay
    }

    /**
     * Shows the loader when navigating to a new internal page.
     */
    function showLoader() {
        loader.classList.remove('hidden');
        loader.style.opacity = '1';
        loader.style.visibility = 'visible';
    }

    // Initialize: Hide loader on DOM ready for fastest perception, not full load.
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        hideLoader();
    } else {
        document.addEventListener('DOMContentLoaded', hideLoader);
        window.addEventListener('load', hideLoader);
    }
    
    // SAFETY FALLBACK: Completely guarantee the loader dies after 2.5 seconds maximum no matter what network issues occur.
    setTimeout(hideLoader, 2500);

    // Global Link Click Listener for Transitions
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a[href]');
        if (!link) return;

        const href = link.getAttribute('href');
        
        // --- Filter out links that shouldn't show the loader ---
        
        // 1. External links (different domain)
        const isExternal = link.hostname && link.hostname !== window.location.hostname;
        if (isExternal) return;

        // 2. Hash links (same page anchors like #contact)
        if (!href || href.startsWith('#')) return;

        // 3. Special protocols
        if (href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('javascript:')) return;

        // 4. Target _blank (opens in new tab)
        if (link.target === '_blank') return;

        // 5. Download links
        if (link.hasAttribute('download')) return;

        // If it passed all filters, it's an internal page navigation
        showLoader();
    });


    // Handle browser back/forward buttons (pageshow event)
    window.addEventListener('pageshow', function(event) {
        // If the page was loaded from cache (bfcache), hide the loader
        if (event.persisted) {
            hideLoader();
        }
    });

})();

/* ============================================================
   AMVIK TECHNOLOGIES — BRAND PROTECTION ENGINE
   ============================================================ */
(function protectInstitutionalBranding() {
    'use strict';

    const AMVIK_SELECTORS = '.amvik-signature-wrap, .amvik-protected-logo, .school-logo, .navbar-logo img, #nav-brand-container img, .loader-logo-wrap img';

    function isProtectedTarget(el) {
        return el && (
            el.matches && el.matches(AMVIK_SELECTORS) ||
            el.closest && el.closest(AMVIK_SELECTORS)
        );
    }

    /* ── 1. Block Context Menu ── */
    document.addEventListener('contextmenu', function(e) {
        if (isProtectedTarget(e.target)) {
            e.preventDefault();
            e.stopPropagation();
        }
    }, true);

    /* ── 2. Block Drag Start ── */
    document.addEventListener('dragstart', function(e) {
        if (isProtectedTarget(e.target)) {
            e.preventDefault();
            e.stopPropagation();
        }
    }, true);

    /* ── 3. Block Mouse-down ── */
    document.addEventListener('mousedown', function(e) {
        if (e.button === 2 && isProtectedTarget(e.target)) {
            e.preventDefault();
        }
    }, true);

    /* ── 4. Block DevTools & Save Shortcuts ── */
    document.addEventListener('keydown', function(e) {
        const isBrowserShortcut =
            (e.ctrlKey && ['s','u','p'].includes(e.key.toLowerCase())) ||
            (e.ctrlKey && e.shiftKey && ['i','j','c'].includes(e.key.toLowerCase())) ||
            e.key === 'F12' ||
            e.key === 'PrintScreen';

        const focused = document.activeElement;
        const inInput = focused && (focused.tagName === 'INPUT' || focused.tagName === 'TEXTAREA');

        if (isBrowserShortcut && !inInput) {
            e.preventDefault();
        }
    });

    /* ── 5. Block Touch-Hold ── */
    document.addEventListener('touchstart', function(e) {
        if (isProtectedTarget(e.target)) {
            // We only prevent default if it's an image to stop "Save Image" popup
            if (e.target.tagName === 'IMG') {
                e.preventDefault();
            }
        }
    }, { passive: false });

    /* ── 6. Initial Hardening Layer ── */
    function hardenProtectedAssets() {
        document.querySelectorAll(AMVIK_SELECTORS).forEach(el => {
            if (el.tagName === 'IMG') {
                el.setAttribute('draggable', 'false');
                el.style.webkitUserDrag = 'none';
                el.style.userDrag = 'none';
            }
            el.style.webkitTouchCallout = 'none';
            el.style.webkitUserSelect = 'none';
            el.style.userSelect = 'none';
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', hardenProtectedAssets);
    } else {
        hardenProtectedAssets();
    }
    setTimeout(hardenProtectedAssets, 2000);
})();
