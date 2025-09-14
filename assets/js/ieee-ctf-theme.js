/* IEEE OMAN CTF 2025 - Theme JavaScript */

(function() {
    'use strict';

    // Initialize theme when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        initializeTheme();
        setupEventHandlers();
        startCountdown();
    });

    /**
     * Initialize theme components
     */
    function initializeTheme() {
        // Add theme identifier to body
        document.body.classList.add('ieee-ctf-theme');
        
        // Initialize tooltips if Bootstrap is available
        if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            tooltipTriggerList.map(function(tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl);
            });
        }

        // Initialize popovers if Bootstrap is available
        if (typeof bootstrap !== 'undefined' && bootstrap.Popover) {
            var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
            popoverTriggerList.map(function(popoverTriggerEl) {
                return new bootstrap.Popover(popoverTriggerEl);
            });
        }

        console.log('IEEE CTF Theme initialized');
    }

    /**
     * Setup global event handlers
     */
    function setupEventHandlers() {
        // Handle form submissions with loading states
        var forms = document.querySelectorAll('form[method="POST"]');
        forms.forEach(function(form) {
            form.addEventListener('submit', function(e) {
                var submitBtn = form.querySelector('button[type="submit"]');
                if (submitBtn) {
                    submitBtn.disabled = true;
                    var originalText = submitBtn.innerHTML;
                    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
                    
                    // Re-enable after 5 seconds as fallback
                    setTimeout(function() {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = originalText;
                    }, 5000);
                }
            });
        });

        // Handle refresh buttons
        var refreshButtons = document.querySelectorAll('[id*="refresh"], .refresh-btn');
        refreshButtons.forEach(function(btn) {
            btn.addEventListener('click', function() {
                this.classList.add('fa-spin');
                setTimeout(function() {
                    location.reload();
                }, 500);
            });
        });

        // Handle copy to clipboard functionality
        var copyButtons = document.querySelectorAll('.copy-btn, [data-copy]');
        copyButtons.forEach(function(btn) {
            btn.addEventListener('click', function() {
                var textToCopy = this.dataset.copy || this.getAttribute('data-clipboard-text');
                if (textToCopy) {
                    copyToClipboard(textToCopy);
                    showToast('Copied to clipboard!', 'success');
                }
            });
        });

        // Auto-hide alerts after 5 seconds
        var alerts = document.querySelectorAll('.alert');
        alerts.forEach(function(alert) {
            setTimeout(function() {
                if (alert && alert.parentNode) {
                    alert.style.transition = 'opacity 0.5s ease';
                    alert.style.opacity = '0';
                    setTimeout(function() {
                        if (alert.parentNode) {
                            alert.parentNode.removeChild(alert);
                        }
                    }, 500);
                }
            }, 5000);
        });
    }

    /**
     * Start countdown timer if element exists
     */
    function startCountdown() {
        var countdownEl = document.getElementById('countdown');
        if (!countdownEl) return;

        // This would need to be set by the server with the actual start time
        var startTime = countdownEl.dataset.startTime;
        if (!startTime) return;

        var startDate = new Date(startTime);
        
        function updateCountdown() {
            var now = new Date();
            var diff = startDate - now;
            
            if (diff <= 0) {
                countdownEl.textContent = 'LIVE NOW!';
                countdownEl.className = 'countdown live';
                return;
            }
            
            var days = Math.floor(diff / 86400000);
            var hours = Math.floor((diff % 86400000) / 3600000);
            var minutes = Math.floor((diff % 3600000) / 60000);
            var seconds = Math.floor((diff % 60000) / 1000);
            
            var timeString = '';
            if (days > 0) {
                timeString = days + 'd ' + pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
            } else {
                timeString = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
            }
            
            countdownEl.textContent = timeString;
        }
        
        function pad(n) {
            return n < 10 ? '0' + n : n;
        }
        
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }

    /**
     * Copy text to clipboard
     */
    function copyToClipboard(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text);
        } else {
            // Fallback for older browsers
            var textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            textArea.style.top = '-999999px';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
        }
    }

    /**
     * Show toast notification
     */
    function showToast(message, type) {
        var toastContainer = document.getElementById('toast-container');
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.id = 'toast-container';
            toastContainer.style.cssText = 'position:fixed;top:20px;right:20px;z-index:9999;max-width:300px;';
            document.body.appendChild(toastContainer);
        }

        var toast = document.createElement('div');
        toast.className = 'toast-notification alert alert-' + (type || 'info');
        toast.style.cssText = 'margin-bottom:10px;padding:12px 16px;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,0.3);';
        toast.innerHTML = '<i class="fas fa-' + getToastIcon(type) + '"></i> ' + message;
        
        toastContainer.appendChild(toast);
        
        // Animate in
        setTimeout(function() {
            toast.style.transform = 'translateX(0)';
            toast.style.opacity = '1';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(function() {
            if (toast.parentNode) {
                toast.style.opacity = '0';
                toast.style.transform = 'translateX(100%)';
                setTimeout(function() {
                    if (toast.parentNode) {
                        toastContainer.removeChild(toast);
                    }
                }, 300);
            }
        }, 3000);
    }

    /**
     * Get appropriate icon for toast type
     */
    function getToastIcon(type) {
        switch (type) {
            case 'success': return 'check-circle';
            case 'error':
            case 'danger': return 'exclamation-triangle';
            case 'warning': return 'exclamation-circle';
            default: return 'info-circle';
        }
    }

    /**
     * Handle API responses globally
     */
    function handleApiResponse(response, successCallback, errorCallback) {
        if (response.ok) {
            response.json().then(function(data) {
                if (data.success) {
                    if (successCallback) successCallback(data);
                    if (data.message) showToast(data.message, 'success');
                } else {
                    if (errorCallback) errorCallback(data);
                    showToast(data.message || 'An error occurred', 'error');
                }
            });
        } else {
            if (errorCallback) errorCallback({ message: 'Network error' });
            showToast('Network error. Please try again.', 'error');
        }
    }

    /**
     * Format time differences
     */
    function formatTimeDiff(date) {
        var now = new Date();
        var diff = now - new Date(date);
        var seconds = Math.floor(diff / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);

        if (days > 0) return days + ' day' + (days > 1 ? 's' : '') + ' ago';
        if (hours > 0) return hours + ' hour' + (hours > 1 ? 's' : '') + ' ago';
        if (minutes > 0) return minutes + ' minute' + (minutes > 1 ? 's' : '') + ' ago';
        return 'Just now';
    }

    /**
     * Debounce function for search inputs
     */
    function debounce(func, wait) {
        var timeout;
        return function executedFunction() {
            var context = this;
            var args = arguments;
            var later = function() {
                timeout = null;
                func.apply(context, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Export utilities for use in other scripts
    window.IEEECTFTheme = {
        showToast: showToast,
        copyToClipboard: copyToClipboard,
        handleApiResponse: handleApiResponse,
        formatTimeDiff: formatTimeDiff,
        debounce: debounce
    };

    // Add CSS for toast notifications
    var toastStyles = document.createElement('style');
    toastStyles.textContent = `
        .toast-notification {
            transform: translateX(100%);
            opacity: 0;
            transition: all 0.3s ease;
        }
        .toast-notification.show {
            transform: translateX(0);
            opacity: 1;
        }
        .countdown.live {
            background: linear-gradient(135deg, #10b981, #059669);
            animation: pulse 2s infinite;
        }
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
        }
    `;
    document.head.appendChild(toastStyles);

})();