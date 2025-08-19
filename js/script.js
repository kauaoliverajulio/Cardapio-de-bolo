$(document).ready(function() {
    // Logo click animation
    $('.logo').click(function() {
        $(this).addClass('clicked');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 500);
    });

    // Smooth scrolling for navigation links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 1500, 'easeInOutQuart');
        }
    });

    // Header scroll effect
    const header = $('.header');
    $(window).on('scroll', function() {
        const scrollPosition = $(window).scrollTop();
        
        if (scrollPosition > 50) {
            header.addClass('scrolled');
        } else {
            header.removeClass('scrolled');
        }
    });

    // Fade in animation on scroll
    function animateOnScroll() {
        $('.hero-categoria-1, .Cake-hero-1, .Pie-hero-1, .Cupcake-hero-1').each(function() {
            const elementTop = $(this).offset().top;
            const elementBottom = elementTop + $(this).outerHeight();
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height();
            
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('animate-in');
            }
        });
    }

    // Initial animation check
    animateOnScroll();
    
    // Animation on scroll
    $(window).on('scroll', animateOnScroll);

    // Cart icon animation
    $('.fa-cart-shopping').parent().on('click', function(e) {
        e.preventDefault();
        $(this).addClass('cart-bounce');
        setTimeout(() => {
            $(this).removeClass('cart-bounce');
        }, 1200);
    });

    // Button click animations
    $('.btn').on('click', function() {
        $(this).addClass('btn-clicked');
        setTimeout(() => {
            $(this).removeClass('btn-clicked');
        }, 250);
    });

    // Category card click animation
    $('.hero-categoria-1').on('click', function() {
        $(this).addClass('card-pulse');
        setTimeout(() => {
            $(this).removeClass('card-pulse');
        }, 600);
    });

    // Product card hover sound effect simulation
    $('.Cake-hero-1, .Pie-hero-1, .Cupcake-hero-1').on('mouseenter', function() {
        $(this).addClass('card-hover-active');
    }).on('mouseleave', function() {
        $(this).removeClass('card-hover-active');
    });

    // Parallax effect for hero image
    $(window).on('scroll', function() {
        const scrolled = $(window).scrollTop();
        const parallax = $('.hero-img');
        const speed = scrolled * 0.5;
        parallax.css('transform', `translateY(${speed}px)`);
    });

    // Loading animation
    $(window).on('load', function() {
        $('body').addClass('loaded');
        $('.hero, .hero-categoria, .hero-bolo, .hero-tortas, .hero-cupcakes, .hero-contato').each(function(index) {
            $(this).delay(index * 250).queue(function() {
                $(this).addClass('fade-in-up').dequeue();
            });
        });
    });

});


