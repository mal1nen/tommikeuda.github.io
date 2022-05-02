(function () {
  "use strict";

  // ======= Sticky
  window.onscroll = function () {
    const ud_header = document.querySelector(".ud-header");
    const sticky = ud_header.offsetTop;
    const logo = document.querySelector(".header-logo");

    if (window.pageYOffset > sticky) {
      ud_header.classList.add("sticky");
    } else {
      ud_header.classList.remove("sticky");
    }

    // === logo change
    if (ud_header.classList.contains("sticky")) {
      logo.src = "assets/images/keudalogo.png";
    } else {
      logo.src = "assets/images/keudalogo.png";
    }

    // show or hide the back-top-top button
    const backToTop = document.querySelector(".back-to-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  };

  // ===== responsive navbar
  let navbarToggler = document.querySelector("#navbarToggler");
  const navbarCollapse = document.querySelector("#navbarCollapse");

  navbarToggler.addEventListener("click", () => {
    navbarToggler.classList.toggle("navbarTogglerActive");
    navbarCollapse.classList.toggle("hidden");
  });

  //===== close navbar-collapse when a  clicked
  document
    .querySelectorAll("#navbarCollapse ul li:not(.submenu-item) a")
    .forEach((e) =>
      e.addEventListener("click", () => {
        navbarToggler.classList.remove("navbarTogglerActive");
        navbarCollapse.classList.add("hidden");
      })
    );

  // ===== Sub-menu
  const submenuItems = document.querySelectorAll(".submenu-item");
  submenuItems.forEach((el) => {
    el.querySelector("a").addEventListener("click", () => {
      el.querySelector(".submenu").classList.toggle("hidden");
    });
  });

  // ===== Faq accordion
  const faqs = document.querySelectorAll(".single-faq");
  faqs.forEach((el) => {
    el.querySelector(".faq-btn").addEventListener("click", () => {
      el.querySelector(".icon").classList.toggle("rotate-180");
      el.querySelector(".faq-content").classList.toggle("hidden");
    });
  });

  // ===== wow js
  new WOW().init();

  // ====== scroll top js
  function scrollTo(element, to = 0, duration = 500) {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;

      const val = Math.easeInOutQuad(currentTime, start, change, duration);

      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  }

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  document.querySelector(".back-to-top").onclick = () => {
    scrollTo(document.documentElement);
  };
})();

<!doctype html>
<html class="no-js" lang="fi" dir="ltr">
<head>
	<meta charset="utf-8">
	<meta http-equiv="x-ua-compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
	
	<title>Ammatinvalintatesti</title>
	<link rel="dns-prefetch" href="https://resources.host.bannerflow.com" />
	<link rel="dns-prefetch" href="https://static.emg-services.net" />
	<link rel="dns-prefetch" href="https://kit.fontawesome.com" />
	<link rel="dns-prefetch" href="https://cdn-static.emg-services.net" />
	<link rel="dns-prefetch" href="https://maxcdn.bootstrapcdn.com" />
	<link rel="dns-prefetch" href="https://fonts.googleapis.com" />
	<link rel="dns-prefetch" href="https://img.emg-services.net" />
	<link rel="dns-prefetch" href="https://www.youtube.com" />
	<link rel="dns-prefetch" href="https://www.google.com" />

	<link rel="stylesheet" type="text/css" href="//cdn-static.emg-services.net/public/content/css/base.min.DAF34FBCCCBFCFB9A6E22C0D22711F1D.css" />

			<link href="//static.emg-services.net/css/emg/site/studentum_fi.css" rel="stylesheet" type="text/css" />
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet">

		<link href="//static.emg-services.net/themes/1/fav/favicon.ico" rel="shortcut icon" type="image/x-icon" />
		<link rel="apple-touch-icon" sizes="57x57" href="//static.emg-services.net/themes/1/fav/apple-icon-57x57.png">
		<link rel="apple-touch-icon" sizes="60x60" href="//static.emg-services.net/themes/1/fav/apple-icon-60x60.png">
		<link rel="apple-touch-icon" sizes="72x72" href="//static.emg-services.net/themes/1/fav/apple-icon-72x72.png">
		<link rel="apple-touch-icon" sizes="76x76" href="//static.emg-services.net/themes/1/fav/apple-icon-76x76.png">
		<link rel="apple-touch-icon" sizes="114x114" href="//static.emg-services.net/themes/1/fav/apple-icon-114x114.png">
		<link rel="apple-touch-icon" sizes="120x120" href="//static.emg-services.net/themes/1/fav/apple-icon-120x120.png">
		<link rel="apple-touch-icon" sizes="144x144" href="//static.emg-services.net/themes/1/fav/apple-icon-144x144.png">
		<link rel="apple-touch-icon" sizes="152x152" href="//static.emg-services.net/themes/1/fav/apple-icon-152x152.png">
		<link rel="apple-touch-icon" sizes="180x180" href="//static.emg-services.net/themes/1/fav/apple-icon-180x180.png">
		<link rel="icon" type="image/png" sizes="192x192" href="//static.emg-services.net/themes/1/fav/android-icon-192x192.png">
		<link rel="icon" type="image/png" sizes="32x32" href="//static.emg-services.net/themes/1/fav/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="96x96" href="//static.emg-services.net/themes/1/fav/favicon-96x96.png">
		<link rel="icon" type="image/png" sizes="16x16" href="//static.emg-services.net/themes/1/fav/favicon-16x16.png">
		<meta name="msapplication-TileColor" content="#ffffff">
		<meta name="msapplication-TileImage" content="//static.emg-services.net/themes/1/fav/ms-icon-144x144.png">
		<meta name="theme-color" content="#ffffff ">
				<script>
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({"pageType":"Tests"});
			</script>
		<!-- Google Tag Manager -->
		<script>
			(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
					new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
					j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
					'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
			})(window,document,'script','dataLayer','GTM-NLVP5VF');
		</script>
		<!-- End Google Tag Manager -->
	


<script type='application/javascript'>var _prum = { id: '5167cc5babe53d094b000000' }; var PRUM_EPISODES = PRUM_EPISODES || {}; PRUM_EPISODES.q = []; PRUM_EPISODES.mark = function (b, a) { PRUM_EPISODES.q.push(['mark', b, a || new Date().getTime()]) }; PRUM_EPISODES.measure = function (b, a, b) { PRUM_EPISODES.q.push(['measure', b, a, b || new Date().getTime()]) }; PRUM_EPISODES.done = function (a) { PRUM_EPISODES.q.push(['done', a]) }; PRUM_EPISODES.mark('firstbyte'); (function () { var b = document.getElementsByTagName('script')[0]; var a = document.createElement('script'); a.type = 'text/javascript'; a.async = true; a.charset = 'UTF-8'; a.src = '//rum-static.pingdom.net/prum.min.js'; b.parentNode.insertBefore(a, b) })();</script>










    <script type="text/javascript">
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        
            ga('create', 'UA-60675981-23', 'auto', { 'name': 'UA6067598123' });
            ga('UA6067598123.require', 'displayfeatures');
        
            
                ga('UA6067598123.require', 'ec');
            
        
            ga('UA6067598123.send', 'pageview');
        
        
            ga('create', 'UA-60675981-46', 'auto', { 'name': 'UA6067598146' });
            ga('UA6067598146.require', 'displayfeatures');
        
            
                ga('UA6067598146.require', 'ec');
            
        
            ga('UA6067598146.send', 'pageview');
        
        
            ga('create', 'UA-77846157-1', 'auto', { 'name': 'UA778461571' });
            ga('UA778461571.require', 'displayfeatures');
        
            
                ga('UA778461571.require', 'ec');
            
        
            ga('UA778461571.send', 'pageview');
        
        
            ga('create', 'UA-2599683-30', 'auto', { 'name': 'UA259968330' });
            ga('UA259968330.require', 'displayfeatures');
        
            
                ga('UA259968330.require', 'ec');
            
        
            ga('UA259968330.send', 'pageview');
        
    </script>



            <meta http-equiv="content-language" content="fi-FI" />
            <meta name="keywords" content="" />

    <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />





<script type="text/javascript" src="//cdn-static.emg-services.net/public/scripts/bundles/jquery-6FD72FAF0CFD681CC974EB1E331C7CE3.js"></script>
<script type="text/javascript" src="//cdn-static.emg-services.net/public/scripts/bundles/external-libs-091008B728BACCDDF1361F32235DC41C.js"></script>



<script type="text/javascript" src="//cdn-static.emg-services.net/public/scripts/bundles/emg-1D4D0E77B3B792B6C08A6BADCB277AAE.js"></script>

<script type="text/javascript" src="//cdn-static.emg-services.net/public/scripts/bundles/emg-header-AE1D58042347DB507B026AEC941313D6.js"></script>



<script type="text/javascript">
    $.validator.methods.number = function (value, element) { return this.optional(element) || /^-?(?:0|[\d\s]+)(?:[,.]\d+)*$/.test(value); }
</script>

    <script type="application/ld+json">
		{
		"@context": "http://schema.org",
		"@type": "WebSite",
		"url": "https://www.studentum.fi/",
		"thumbnailUrl" : "https://static.emg-services.net/masterpages/pics/logos/v4/studentum_fi@2x.png",
		"potentialAction": {
		"@type": "SearchAction",
		"target": "https://www.studentum.fi/search?q={search_term_string}",
		"query-input": "required name=search_term_string"
		}
		}
    </script>
    <script type="application/ld+json">
		{
		"@context": "http://schema.org/",
		"@type": "Organization",
		"name": "studentum.fi",
		"logo": {
		"@type":"ImageObject",
		"url":"https://static.emg-services.net/masterpages/pics/logos/v4/studentum_fi@2x.png"
		},
		"url": "https://www.studentum.fi/"
		}
    </script>




    <script type='text/javascript'>
        var googletag = googletag || {};
        googletag.cmd = googletag.cmd || [];
        (function () {
            var gads = document.createElement('script');
            gads.async = true;
            gads.type = 'text/javascript';
            var useSSL = 'https:' == document.location.protocol;
            gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
            var node = document.getElementsByTagName('script')[0];
            node.parentNode.insertBefore(gads, node);
        })();
    </script>

	
	
	
	
	
		<meta property="fb:app_id" content="217938218217862" />
			
	
</head>
<body id="body" class=" emg-v2 pl-twocolumns pg-default theme-1 site-studentum_fi type-mainsite filter-labels">
    

    
        <!-- Google Tag Manager (noscript) -->
        <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NLVP5VF"
                    height="0" width="0" style="display: none; visibility: hidden"></iframe>
        </noscript>
        <!-- End Google Tag Manager (noscript) -->
            <div id="fb-root"></div>
        <script>
			window.fbAsyncInit = function() {
				FB.init({
					appId: '217938218217862',
					channelUrl: '//www.studentum.fi/fb-channel.ashx',
					status: true,
					cookie: true,
					xfbml: true
				});
			};
			(function(d, s, id) {
				var js, fjs = d.getElementsByTagName(s)[0];
				if (d.getElementById(id)) {
					return;
				}
				js = d.createElement(s);
				js.id = id;
				js.async = true;
				js.src = "//connect.facebook.net/fi_FI/all.js";
				fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));
		</script>
	
	
<a id="top"></a>
	<div class="off-canvas-wrapper">
        <div class="off-canvas-content" data-off-canvas-content>
							<div class="off-canvas position-right" id="offCanvas" data-transition="push" data-off-canvas>
								    <aside>
	    <nav>
		    <ul class="vertical menu" data-drilldown 
		        data-parent-link="true" 
		        data-scroll-top="true" 
		        data-close-on-click="true" 
		        data-back-button='<li class="js-drilldown-back"><a tabindex="0">Takaisin</a></li>'>
				    <li>
					    <a href="/loyda-koulutuksesi/" target="_self" title="L&#246;yd&#228; koulutuksesi"  class="menu-oc-item">L&#246;yd&#228; koulutuksesi</a>
						    <ul class="menu vertical nested">
								    <li class="menu-oc-item"><a href="/loyda-koulutuksesi/suomen-parhaat-opiskelukaupungit/top10-opiskelukaupungit-21691" target="_self">TOP 10 opiskelukaupungit</a></li>
								    <li class="menu-oc-item"><a href="/EducationTest/Start/11" target="_self">Ammatinvalintatesti</a></li>
								    <li class="menu-oc-item"><a href="/loyda-koulutuksesi/messut/hae-korkeakouluun-virtuaalimessut-19846" target="_self">Hae korkeakouluun! -digimessut</a></li>
								    <li class="menu-oc-item"><a href="/loyda-koulutuksesi/opiskelu-ulkomailla/" target="_self">Opiskelu ulkomailla</a></li>
								    <li class="menu-oc-item"><a href="/tietoa-hakijalle/mihin-voin-hakea-13447" target="_self">Mihin voin hakea?</a></li>
								    <li class="menu-oc-item"><a href="/sections/faq/index.aspx" target="_self">Kysy opiskelusta</a></li>
								    <li class="menu-oc-item"><a href="/koulutushaku/" target="_self">Koulutushaku</a></li>
								    <li class="menu-oc-item"><a href="/sections/newsletters/index.aspx" target="_self">Tilaa uutiskirje</a></li>
						    </ul>
				    </li>
				    <li>
					    <a href="/tietoa-hakijalle/" target="_self" title="Hakijalle"  class="menu-oc-item">Hakijalle</a>
						    <ul class="menu vertical nested">
								    <li class="menu-oc-item"><a href="/tietoa-hakijalle/yhteishaku-7012" target="_self">Yhteishaku</a></li>
								    <li class="menu-oc-item"><a href="/tietoa-hakijalle/jatkuva-haku-13180" target="_self">Jatkuva haku</a></li>
								    <li class="menu-oc-item"><a href="/tietoa-hakijalle/lisahaku-6065" target="_self">Lis&#228;haku</a></li>
								    <li class="menu-oc-item"><a href="/tietoa-hakijalle/paasykokeet/" target="_self">P&#228;&#228;sykokeet</a></li>
						    </ul>
				    </li>
				    <li>
					    <a href="/tietoa-opiskelijalle/" target="_self" title="Opiskelijan maailma"  class="menu-oc-item">Opiskelijan maailma</a>
						    <ul class="menu vertical nested">
								    <li class="menu-oc-item"><a href="/loyda-koulutuksesi/sisallot-teemoittain-14964" target="_self">Artikkelit</a></li>
								    <li class="menu-oc-item"><a href="/tietoa-opiskelijalle/opiskelijaedut-8896" target="_self">Opiskelijaedut</a></li>
								    <li class="menu-oc-item"><a href="/tietoa-opiskelijalle/opintojen-rahoitus-7867" target="_self">Opiskelijan talous</a></li>
								    <li class="menu-oc-item"><a href="/tietoa-opiskelijalle/tukea-opiskeluun-8841" target="_self">Tukea opiskeluun</a></li>
								    <li class="menu-oc-item"><a href="/tietoa-opiskelijalle/ylioppilaskirjoitukset-7778" target="_self">Ylioppilaskirjoitukset</a></li>
								    <li class="menu-oc-item"><a href="/tietoa-opiskelijalle/vinkkeja-opiskeluun-13373" target="_self">Vinkkej&#228; opiskeluun</a></li>
						    </ul>
				    </li>
				    <li>
					    <a href="/tyo-ja-palkka/" target="_self" title="Ty&#246; &amp; palkka"  class="menu-oc-item">Ty&#246; &amp; palkka</a>
				    </li>
				    <li>
					    <a href="/tietoa-tyoelamasta/" target="_self" title="Tietoa ty&#246;el&#228;m&#228;st&#228;"  class="menu-oc-item">Ty&#246;el&#228;m&#228;</a>
						    <ul class="menu vertical nested">
								    <li class="menu-oc-item"><a href="/tietoa-tyoelamasta/tyoelamatietoa-ammattialoista/" target="_self">Ammattialat</a></li>
								    <li class="menu-oc-item"><a href="/tietoa-tyoelamasta/urapolut/" target="_self">Urapolkuja</a></li>
								    <li class="menu-oc-item"><a href="/tietoa-tyoelamasta/tyoharjoittelu-8814" target="_self">Ty&#246;harjoittelu</a></li>
								    <li class="menu-oc-item"><a href="/tietoa-tyoelamasta/vinkkeja-tyoelamaan-13426" target="_self">Vinkkej&#228; ty&#246;el&#228;m&#228;&#228;n</a></li>
								    <li class="menu-oc-item"><a href="/tietoa-tyoelamasta/tyoelamatietoa-ammattialoista/teknologiateollisuus-18517" target="_self">Teknologiateollisuus</a></li>
						    </ul>
				    </li>
				    <li>
					    <a href="/tietoa-studentumista/" target="_self" title="Studentumista"  class="menu-oc-item">Tietoa meist&#228;</a>
						    <ul class="menu vertical nested">
								    <li class="menu-oc-item"><a href="/tietoa-studentumista/tietoa-opoille-3782" target="_self">Opoille</a></li>
								    <li class="menu-oc-item"><a href="/tietoa-studentumista/lehdisto-2019-14694" target="_self">Medialle</a></li>
								    <li class="menu-oc-item"><a href="/tietoa-studentumista/selvitykset/" target="_self">Selvitykset</a></li>
								    <li class="menu-oc-item"><a href="/loyda-koulutuksesi/messut/studentum-roadshow-8106" target="_self">Studentum Roadshow</a></li>
								    <li class="menu-oc-item"><a href="https://oppilaitoksille.studentum.fi/" target="_self">Markkinoi oppilaitostanne</a></li>
								    <li class="menu-oc-item"><a href="/tietoa-studentumista/yhteystiedot-11230" target="_self">Yhteystiedot</a></li>
						    </ul>
				    </li>
		    </ul>
	    </nav>
    </aside>

							</div>
            <div id="emg-mobile-bar">
                Sivuston k&#228;ytt&#246;tapa:
                <span onclick="forceMobileSite();emg.analytics.trackEventAsync('desktop-exitlink', 'click');">
                    Mobiili
                </span>
            </div>
            <div class="pd-container">
			<div class="adunit google-ad-panorama"
				data-adunit="studentum_fi_ad_panorama_pushdown"
				data-dimensions="320x100, 728x90, 980x120, 980x240"
				data-size-mapping="panorama_pushdown">
			</div>

	<div id="pd-slot">
		<span class="fa-stack fa-lg pd-close">
			<i class="fa fa-circle fa-stack-2x"></i>
			<i class="fa fa-times fa-stack-1x"></i>
		</span>
	</div>
</div>
												<header id="header">
                <div id="emg-menu" class="top-bar">
                    <div class="top-bar-left">
                        <a href="/" class="logo" title="Siirry studentum.fi:n etusivulle">
                            <img src="//static.emg-services.net/masterpages/pics/logos/v4/studentum_fi@2x.png" alt="studentum.fi" />
                        </a>
                    </div>
                    <div class="top-bar-right">
                            <nav id="nav" aria-label="Ammatinvalintatesti">
        <ul class="vertical medium-horizontal menu" id="nav-list" data-responsive-menu="drilldown small-dropdown" data-hide-for="medium" role="menubar" aria-label="Ammatinvalintatesti">
                <li class="site-menu-li active has-submenu">
                    <a href="/loyda-koulutuksesi/" target="_self" title="L&#246;yd&#228; koulutuksesi"  class="site-menu-item"  aria-haspopup=&quot;true&quot; aria-expanded="false" tabindex="0">
                        <span>L&#246;yd&#228; koulutuksesi</span>
                    </a>
                        <ul class="submenu menu vertical" data-submenu>
                                <li class="menu-dd-item">
                                    <a href="/loyda-koulutuksesi/suomen-parhaat-opiskelukaupungit/top10-opiskelukaupungit-21691" target="_self" tabindex="-1">TOP 10 opiskelukaupungit</a>
                                </li>
                                <li class="menu-dd-item  menu-sub-active">
                                    <a href="/EducationTest/Start/11" target="_self" tabindex="-1">Ammatinvalintatesti</a>
                                </li>
                                <li class="menu-dd-item">
                                    <a href="/loyda-koulutuksesi/messut/hae-korkeakouluun-virtuaalimessut-19846" target="_self" tabindex="-1">Hae korkeakouluun! -digimessut</a>
                                </li>
                                <li class="menu-dd-item">
                                    <a href="/loyda-koulutuksesi/opiskelu-ulkomailla/" target="_self" tabindex="-1">Opiskelu ulkomailla</a>
                                </li>
                                <li class="menu-dd-item">
                                    <a href="/tietoa-hakijalle/mihin-voin-hakea-13447" target="_self" tabindex="-1">Mihin voin hakea?</a>
                                </li>
                                <li class="menu-dd-item">
                                    <a href="/sections/faq/index.aspx" target="_self" tabindex="-1">Kysy opiskelusta</a>
                                </li>
                                <li class="menu-dd-item">
                                    <a href="/koulutushaku/" target="_self" tabindex="-1">Koulutushaku</a>
                                </li>
                                <li class="menu-dd-item">
                                    <a href="/sections/newsletters/index.aspx" target="_self" tabindex="-1">Tilaa uutiskirje</a>
                                </li>
                        </ul>
                </li>
                <li class="site-menu-li has-submenu">
                    <a href="/tietoa-hakijalle/" target="_self" title="Hakijalle"  class="site-menu-item"  aria-haspopup=&quot;true&quot; aria-expanded="false" tabindex="0">
                        <span>Hakijalle</span>
                    </a>
                        <ul class="submenu menu vertical" data-submenu>
                                <li class="menu-dd-item">
                                    <a href="/tietoa-hakijalle/yhteishaku-7012" target="_self" tabindex="-1">Yhteishaku</a>
                                </li>
                                <li class="menu-dd-item">
                                    <a href="/tietoa-hakijalle/jatkuva-haku-13180" target="_self" tabindex="-1">Jatkuva haku</a>
                                </li>
                                <li class="menu-dd-item">
                                    <a href="/tietoa-hakijalle/lisahaku-6065" target="_self" tabindex="-1">Lis&#228;haku</a>
                                </li>
                                <li class="menu-dd-item">
                                    <a href="/tietoa-hakijalle/paasykokeet/" target="_self" tabindex="-1">P&#228;&#228;sykokeet</a>
                                </li>
                        </ul>
                </li>
                <li class="site-menu-li has-submenu">
                    <a href="/tietoa-opiskelijalle/" target="_self" title="Opiskelijan maailma"  class="site-menu-item"  aria-haspopup=&quot;true&quot; aria-expanded="false" tabindex="0">
                        <span>Opiskelijan maailma</span>
                    </a>
                        <ul class="submenu menu vertical" data-submenu>
                                <li class="menu-dd-item">
                                    <a href="/loyda-koulutuksesi/sisallot-teemoittain-14964" target="_self" tabindex="-1">Artikkelit</a>
                                </li>
                                <li class="menu-dd-item">
                                    <a href="/tietoa-opiskelijalle/opiskelijaedut-8896" target="_self" tabindex="-1">Opiskelijaedut</a>
                                </li>
                                <li class="menu-dd-item">
                                    <a href="/tietoa-opiskelijalle/opintojen-rahoitus-7867" target="_self" tabindex="-1">Opiskelijan talous</a>
                                </li>
                                <li class="menu-dd-item">
                                    <a href="/tietoa-opiskelijalle/tukea-opiskeluun-8841" target="_self" tabindex="-1">Tukea opiskeluun</a>
                                </li>
                                <li class="menu-dd-item">
                                    <a href="/tietoa-opiskelijalle/ylioppilaskirjoitukset-7778" target="_self" tabindex="-1">Ylioppilaskirjoitukset</a>
                                </li>
                                <li class="menu-dd-item">
                                    <a href="/tietoa-opiskelijalle/vinkkeja-opiskeluun-13373" target="_self" tabindex="-1">Vinkkej&#228; opiskeluun</a>
                                </li>
                        </ul>
                </li>
                <li class="site-menu-li">
                    <a href="/tyo-ja-palkka/" target="_self" title="Ty&#246; &amp; palkka"  class="site-menu-item"  aria-expanded="false" tabindex="0">
                        <span>Ty&#246; &amp; palkka</span>
                    </a>
                </li>
                <li class="site-menu-li has-submenu">
                    <a href="/tietoa-tyoelamasta/" target="_self" title="Tietoa ty&#246;el&#228;m&#228;st&#228;"  class="site-menu-item"  aria-haspopup=&quot;true&quot; aria-expanded="false" tabindex="0">
                        <span>Ty&#246;el&#228;m&#228;</span>
                    </a>
                        <ul class="submenu menu vertical" data-submenu>
                                <li class="menu-dd-item">
                                    <a href="/tietoa-tyoelamasta/tyoelamatietoa-ammattialoista/" target="_self" tabindex="-1">Ammattialat</a>
                                </li>
                                <li class="menu-dd-item">
                                    <a href="/tietoa-tyoelamasta/urapolut/" target="_self" tabindex="-1">Urapolkuja</a>
                                </li>
                                <li class="menu-dd-item">
                                    <a href="/tietoa-tyoelamasta/tyoharjoittelu-8814" target="_self" tabindex="-1">Ty&#246;harjoittelu</a>
                                </li>
                                <li class="menu-dd-item">
                                    <a href="/tietoa-tyoelamasta/vinkkeja-tyoelamaan-13426" target="_self" tabindex="-1">Vinkkej&#228; ty&#246;el&#228;m&#228;&#228;n</a>
                                </li>
                                <li class="menu-dd-item">
                                    <a href="/tietoa-tyoelamasta/tyoelamatietoa-ammattialoista/teknologiateollisuus-18517" target="_self" tabindex="-1">Teknologiateollisuus</a>
                                </li>
                        </ul>
                </li>
                <li class="site-menu-li has-submenu">
                    <a href="/tietoa-studentumista/" target="_self" title="Studentumista"  class="site-menu-item"  aria-haspopup=&quot;true&quot; aria-expanded="false" tabindex="0">
                        <span>Tietoa meist&#228;</span>
                    </a>
                        <ul class="submenu menu vertical" data-submenu>
                                <li class="menu-dd-item">
                                    <a href="/tietoa-studentumista/tietoa-opoille-3782" target="_self" tabindex="-1">Opoille</a>
                                </li>
                                <li class="menu-dd-item">
                                    <a href="/tietoa-studentumista/lehdisto-2019-14694" target="_self" tabindex="-1">Medialle</a>
                                </li>
                                <li class="menu-dd-item">
                                    <a href="/tietoa-studentumista/selvitykset/" target="_self" tabindex="-1">Selvitykset</a>
                                </li>
                                <li class="menu-dd-item">
                                    <a href="/loyda-koulutuksesi/messut/studentum-roadshow-8106" target="_self" tabindex="-1">Studentum Roadshow</a>
                                </li>
                                <li class="menu-dd-item">
                                    <a href="https://oppilaitoksille.studentum.fi/" target="_self" tabindex="-1">Markkinoi oppilaitostanne</a>
                                </li>
                                <li class="menu-dd-item">
                                    <a href="/tietoa-studentumista/yhteystiedot-11230" target="_self" tabindex="-1">Yhteystiedot</a>
                                </li>
                        </ul>
                </li>
        </ul>
    </nav>

                    </div>
                </div>
            </header>
            <header id="header-tablet" class="title-bar" data-responsive-toggle="emg-menu">
	            <div class="title-bar-left">
		            <a href="/" class="logo" title="Siirry studentum.fi:n etusivulle">
			            <img src="//static.emg-services.net/masterpages/pics/logos/v4/studentum_fi@2x.png" alt="studentum.fi" />
		            </a>
	            </div>
	            <div class="title-bar-right">
		            <div class="row expanded collapse row-header-icons">
			            <div class="small-6 columns col-search-icon">
				            <i class="fal fa-search header-icon-search"></i>
			            </div>
			            <div class="small-6 columns col-bars-icon">
				            <i class="fal fa-bars header-icon-bars" data-toggle="offCanvas"></i>
			            </div>
		            </div>
	            </div>
            </header>

						
<div id="popup-notification-container"></div>
<script>
    $(function() {
        $.get('/nocache/render-popup-notification', function(content) {
                var contentElement = $('#popup-notification-container');
                if (content) {
                    contentElement.html(content);
                }
                else {
                    contentElement.remove();
                }
            });
        });
</script>						<section id="sf">


<div class="row-search emg-head-hero emg-head emg-head-novideo">


	<div class="row row-search-form">
		<div class="large-12 columns col-search end">
			<script>
	var searchForm;
	$(function () {
		searchForm = new emg.searchForm;
		searchForm.init(
			"/search/educations",
			[{"Items":null,"DefaultItem":{"ParameterName":"placeId","ParameterValue":"1607","Name":null,"Id":0,"Level":0,"Count":0,"HasChildren":false,"Path":null,"SubItems":[]},"Preload":false,"PopupDirection":0,"FilterType":"hierarchy","Name":"category","DefaultParameterName":"categoryId","ParameterName":"categoryId","Value":null,"ValueDisplayName":null,"CssClassName":null,"Platform":1,"TrackingName":null},{"Items":null,"DefaultItem":{"ParameterName":"placeId","ParameterValue":"1607","Name":null,"Id":0,"Level":0,"Count":0,"HasChildren":false,"Path":null,"SubItems":[]},"Preload":false,"PopupDirection":0,"FilterType":"hierarchy","Name":"educationType","DefaultParameterName":"educationTypeId","ParameterName":"educationTypeId","Value":null,"ValueDisplayName":null,"CssClassName":null,"Platform":1,"TrackingName":null},{"Watermark":"Vapaasanahaku","FilterType":"textbox","Name":"freetext","DefaultParameterName":"q","ParameterName":"q","Value":null,"ValueDisplayName":null,"CssClassName":null,"Platform":1,"TrackingName":null},{"Preload":false,"ViewName":"ExtraFilter","FilterType":"popup","Items":null,"DefaultItem":{"ParameterName":"placeId","ParameterValue":"1607","Name":null,"Id":0,"Level":0,"Count":0,"HasChildren":false,"Path":null,"SubItems":[]},"PopupDirection":0,"Name":"language","DefaultParameterName":"language","ParameterName":"languageId","Value":null,"ValueDisplayName":null,"CssClassName":null,"Platform":1,"TrackingName":null}],
			{ 'ac': function() { emg.analytics.trackEventAsync('search-form-interactions', 'default', 'autocomplete-result-click'); },
'category': function() { emg.analytics.trackEventAsync('search-form-interactions', 'default', 'category-result-click'); },
'educationType': function() { emg.analytics.trackEventAsync('search-form-interactions', 'default', 'education-type-result-click'); },
'place': function() { emg.analytics.trackEventAsync('search-form-interactions', 'default', 'place-result-click'); },
'freetext': function() { emg.analytics.trackEventAsync('search-form-interactions', 'default', 'freetext-result-click'); },
'language': function() { emg.analytics.trackEventAsync('search-form-interactions', 'default', 'language-result-click'); } },
			{
				jsonUrl: '/search/autocomplete?text={0}',
				resources: { 'CertificateCategory': 'Certificate category', 'Certificate': 'Sertifiointi', 'Category': 'Koulutusala', 'Place': 'Paikka', 'EducationType': 'Koulutustyyppi', 'Institute': 'Oppilaitos', 'SearchTextKeyword': 'Hakusana', 'Keyword': 'Hakusana', 'DeliveryMethod': 'Toteutustapa' }
			}, 'Default', {"EnableSuggestedPlaces":true,"SuggestedPlacesLabel":"Paikat lähellä sinua","FilterMode":0}, '/Search/GetFilterView?searchType=Education&filterType=HeaderSearch',
			''
		);
	});
</script>

<div class="emg-search-header">

        <div class="search-header-bar">
            <div class="search-header-bar-inner">
                <div class="search-header-form">
                    
<div class="search-header-form-inner search-header-form-flex">
    <div class="search-header-form-container search-header-form-container-filters-2">
        <div class="search-header-form-filters">
                <button class="search-header-form-filter sf-filter-empty" id="search-header-form-filter-category">
                    <span class="dropdown-default-category-topsearch">Koulutusala</span>
                    
                    <i class="fal fa-angle-down"></i>
                </button>
                <button class="search-header-form-filter sf-filter-empty" id="search-header-form-filter-educationType">
                    <span class="dropdown-default-educationType-topsearch">Koulutustyyppi</span>
                    
                    <i class="fal fa-angle-down"></i>
                </button>
                    </div>
        <div class="search-header-form-textbox">
                <i class="search-text-box-icon fa fa-search"></i>
                <input type="text" 
                       id="search-header-form-filter-freetext" 
                       placeholder="Vapaasanahaku" 
                       class="search-header-form-input-text" />
                    </div>
        <div class="search-header-form-button">
            <input type="submit" onclick="emg.analytics.trackEventAsync(&#39;search-form-interactions&#39;, &#39;default&#39;, &#39;search-button-click&#39;);" class="search-header-form-button-search search-header-form-submit-button" value="Etsi" />
        </div>
    </div>
</div>
                </div>
            </div>
        </div>

    
    <div class="search-header-filter-container " style="display: none;">
        <div class="search-header-filter-close-container search-header-filter-close-container-nobg">
            <div class="search-header-filter-close">
                <img src="//static.emg-services.net/masterpages/pics/icons/close.svg" onerror="this.onerror=null; this.src='//static.emg-services.net/masterpages/pics/icons/close.svg'" alt="Close" />
            </div>
            <div class="search-header-filter-close-container-inner">
                <div class="search-header-go-back" style="display: none"></div>
            </div>
        </div>
        <div class="search-header-filter-container-inner">
            



	<div id="filter-container-category" class=" sf3">
	</div>
	<div id="filter-container-educationType" class=" sf3">
	</div>

        </div>
    </div>
    
    

</div>
		</div>
	</div>


</div>

						</section>
						
            
		
				<section id="breadcrumbs">
					<div class="row row-body-start">
						<div class="large-12 columns col-crumbs">
							
<div class="breadcrumb-container">

    <nav aria-label="You are here:" role="navigation">
        <ul class="breadcrumbs" itemscope itemtype="http://schema.org/BreadcrumbList">

            
                    <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem" typeof="ListItem" class="">
                        <a href="/" title="Etusivu" itemprop="item">
                            <span class="crumb-item crumb-item-first"><i class="fal fa-home-alt"></i></span>
                            <meta itemprop="name" content="Etusivu" />
                            <meta itemprop="position" content="0" />
                        </a>
                    </li>
                    <li class="ellipsisPoints"><a> . . . </a></li>

                            <li class="breadcrumbItems" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem" typeof="ListItem">
                                <a href="/loyda-koulutuksesi/" title="L&#246;yd&#228; koulutuksesi" itemprop="item">
                                    <span itemprop="name" class="crumb-item">L&#246;yd&#228; koulutuksesi</span>
                                    <meta itemprop="position" content="1" />
                                </a>
                            </li>
                        

                
                            <li>
                                <span>Ammatinvalintatesti</span>
                            </li>
                        

                



        </ul>
    </nav>
</div>
<script>
    $(".ellipsisPoints").click(function () {
        $(".ellipsisPoints").css("display", "none");
        $(".breadcrumbItems").css("display", "inline-block");
    });
</script>
						</div>
					</div>
				</section>
            <main id="content">

						<div class="row row-body">
							
							<div class="adunit google-ad-theme" data-adunit="theme" data-dimensions="938x50" style="display: none;"></div>
							
							<div class="large-6 medium-12 columns col-lcb">

<a name="ammatinvalintatesti"></a>


<a name="ammatinvalintatesti"></a>
<div class="lcb lcb-ammatinvalintatesti" id="lcb-ammatinvalintatesti">
	    <div class="lcb-head">
		    			    <span class="lcb-title"><h1 id="leftColFrameTitle" class="lcb-title" title="Ammatinvalintatesti">Ammatinvalintatesti</h1></span>

	    </div>
    
    <div class="lcb-body">
        <section>
            <style>
	#saveTestForm label.error
	{
		color: #E53935;
		font-weight: normal;
		margin: 5px 0;
		font-size: 10px;
	}

	.autoCompleteDropDownList {
		max-height: 150px!important;
	}
</style>
<div id="startPage">
    
<script type="text/javascript">
	$(function () {
		if ($('.fb_iframe_widget_lift').length) {
			$('.htmlpage-content').parents('.lcb-body, .lcb').css('overflow', 'visible');
		}

		$('.pres, .emg-pga').each(function () {
			var p = $(this);
			$('.emg-link', p).click(function () {
				var source = p.find('.emg-sourcelink');
				var handler = source[0].onclick;
				handler.apply(this);
                window.open(source.attr('href'), '_blank');
            });
		});
	});
</script>

<article class="htmlpage-content has-date" itemscope itemtype="http://schema.org/WebPage">
	<p><img src="//img.emg-services.net/HtmlPages/HtmlPage3751/ammatinvalintatesti_etusivu-2.jpg" alt="Ammatinvalintatesti" title="Ammatinvalintatesti"></p>
<p>Moni pohtii eri ammatti- ja koulutusvalintoja erityisesti peruskoulun tai lukion ollessa loppusuoralla. Vaivaako sinuakin valinnan vaikeus? Onko sinulla vaikeuksia päättää mikä ammatti sopisi parhaiten juuri sinulle? Tai etkö tiedä mitä eri koulutusvaihtoehtoja unelma-alallasi on?</p>
<p>Ei hätää! Tee Studentumin ammatinvalintatesti, niin näet, mille alalle voisit mahdollisesti sopia. Testin tehtyäsi voit myös lukea lisää eri ammattialoista, koulutusvaihtoehdoista ja työelämästä. Testin lopussa pyydämme sinua antamaan sähköpostiosoitteesi, jotta voimme lähettää sinulle testin tulokset myös sitä kautta.</p>
<p>Muistathan, että ammatinvalintatestin antamat tulokset ovat suuntaa-antavia ja auttavat sinua alkuun sopivan koulutuksen ja ammatin löytämisessä. Tutustu siis avoimin mielin useisiin eri vaihtoehtoihin.&nbsp;<strong>Onnea koulutuksesi löytämiseen!</strong></p>
      <div class="htmlpage-date">
	      <div class="htmlpage-date-container">
		      <span class="htmlpage-date-label">Viimeksi päivitetty:</span>
					<span class="htmlpage-date-value">09 maalis 2021</span>
	      </div>
      </div>
</article>


    <div class="start-test">
        <br /><br />
        <input type="button" name="btnStart" value="Aloita testi" id="btnStart" class="button-big-cta button-full" />
    </div>
</div>
    
<input id="questionId1" name="questionId1" type="hidden" value="77" />    <div class="questionPage emg-test" id ="1"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>1</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Haluatko tehdä töitä numeroiden parissa?</span>
                </div>
                <div id="rdoBtnDiv1" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnNext" value="Seuraava kysymys" id="btnNext" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>
<input id="questionId2" name="questionId2" type="hidden" value="78" />    <div class="questionPage emg-test" id ="2"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>2</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Pidätkö suunnittelusta, organisoinnista ja järjestyksen luomisesta?</span>
                </div>
                <div id="rdoBtnDiv2" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnNext" value="Seuraava kysymys" id="btnNext" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>
<input id="questionId3" name="questionId3" type="hidden" value="79" />    <div class="questionPage emg-test" id ="3"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>3</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Ovatko säännöt ja lait mielestäsi tärkeitä?</span>
                </div>
                <div id="rdoBtnDiv3" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnNext" value="Seuraava kysymys" id="btnNext" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>
<input id="questionId4" name="questionId4" type="hidden" value="80" />    <div class="questionPage emg-test" id ="4"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>4</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Haluatko tehdä töitä henkilöstöhallinnon- ja kysymysten parissa?</span>
                </div>
                <div id="rdoBtnDiv4" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnNext" value="Seuraava kysymys" id="btnNext" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>
<input id="questionId5" name="questionId5" type="hidden" value="81" />    <div class="questionPage emg-test" id ="5"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>5</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Oletko palveluhenkinen ja pidät työskentelystä erilaisten ihmisten kanssa?</span>
                </div>
                <div id="rdoBtnDiv5" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnNext" value="Seuraava kysymys" id="btnNext" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>
<input id="questionId6" name="questionId6" type="hidden" value="82" />    <div class="questionPage emg-test" id ="6"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>6</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Pidätkö rakentamisesta ja haluat nähdä käsiesi työn jäljen?</span>
                </div>
                <div id="rdoBtnDiv6" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnNext" value="Seuraava kysymys" id="btnNext" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>
<input id="questionId7" name="questionId7" type="hidden" value="83" />    <div class="questionPage emg-test" id ="7"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>7</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Pidätkö ruoanlaitosta?</span>
                </div>
                <div id="rdoBtnDiv7" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnNext" value="Seuraava kysymys" id="btnNext" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>
<input id="questionId8" name="questionId8" type="hidden" value="84" />    <div class="questionPage emg-test" id ="8"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>8</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Pidätkö juhlien ja hienojen illallisten järjestämisestä?</span>
                </div>
                <div id="rdoBtnDiv8" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnNext" value="Seuraava kysymys" id="btnNext" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>
<input id="questionId9" name="questionId9" type="hidden" value="85" />    <div class="questionPage emg-test" id ="9"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>9</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Oletko luova, taiteellinen ja/tai musikaalinen?</span>
                </div>
                <div id="rdoBtnDiv9" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnNext" value="Seuraava kysymys" id="btnNext" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>
<input id="questionId10" name="questionId10" type="hidden" value="86" />    <div class="questionPage emg-test" id ="10"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>10</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Pidätkö teatterista, museoista ja lukemisesta?</span>
                </div>
                <div id="rdoBtnDiv10" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnNext" value="Seuraava kysymys" id="btnNext" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>
<input id="questionId11" name="questionId11" type="hidden" value="87" />    <div class="questionPage emg-test" id ="11"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>11</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Ovatko trendit, muoti ja ulkonäkö tärkeitä sinulle?</span>
                </div>
                <div id="rdoBtnDiv11" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnNext" value="Seuraava kysymys" id="btnNext" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>
<input id="questionId12" name="questionId12" type="hidden" value="88" />    <div class="questionPage emg-test" id ="12"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>12</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Haaveiletko viestinnän ja tiedottamisen parissa työskentelystä?</span>
                </div>
                <div id="rdoBtnDiv12" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnNext" value="Seuraava kysymys" id="btnNext" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>
<input id="questionId13" name="questionId13" type="hidden" value="89" />    <div class="questionPage emg-test" id ="13"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>13</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Kiinnostaako sinua mainonta ja markkinointi?</span>
                </div>
                <div id="rdoBtnDiv13" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnNext" value="Seuraava kysymys" id="btnNext" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>
<input id="questionId14" name="questionId14" type="hidden" value="90" />    <div class="questionPage emg-test" id ="14"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>14</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Oletko kielellisesti lahjakas ja pidät uusien kielten oppimisesta?</span>
                </div>
                <div id="rdoBtnDiv14" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnNext" value="Seuraava kysymys" id="btnNext" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>
<input id="questionId15" name="questionId15" type="hidden" value="91" />    <div class="questionPage emg-test" id ="15"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>15</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Oletko hyvä opettamaan muita?</span>
                </div>
                <div id="rdoBtnDiv15" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnNext" value="Seuraava kysymys" id="btnNext" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>
<input id="questionId16" name="questionId16" type="hidden" value="92" />    <div class="questionPage emg-test" id ="16"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>16</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Pyytävätkö ystäväsi sinulta usein apua ja neuvoa elämän eri tilanteissa?</span>
                </div>
                <div id="rdoBtnDiv16" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnNext" value="Seuraava kysymys" id="btnNext" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>
<input id="questionId17" name="questionId17" type="hidden" value="93" />    <div class="questionPage emg-test" id ="17"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>17</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Pidätkö esiintymisestä?</span>
                </div>
                <div id="rdoBtnDiv17" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnNext" value="Seuraava kysymys" id="btnNext" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>
<input id="questionId18" name="questionId18" type="hidden" value="94" />    <div class="questionPage emg-test" id ="18"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>18</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Pidätkö historiasta, yhteiskuntakysymyksistä ja politiikasta?</span>
                </div>
                <div id="rdoBtnDiv18" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnNext" value="Seuraava kysymys" id="btnNext" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>
<input id="questionId19" name="questionId19" type="hidden" value="95" />    <div class="questionPage emg-test" id ="19"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>19</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Onko eri ihmisten toiminnan, vuorovaikutuksen ja käyttäytymisen tutkiminen mielestäsi mielenkiintoista?</span>
                </div>
                <div id="rdoBtnDiv19" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnNext" value="Seuraava kysymys" id="btnNext" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>
<input id="questionId20" name="questionId20" type="hidden" value="96" />    <div class="questionPage emg-test" id ="20"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>20</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Oletko valmis matkustamaan ja haluat tehdä töitä kansainvälisissä tehtävissä?</span>
                </div>
                <div id="rdoBtnDiv20" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnNext" value="Seuraava kysymys" id="btnNext" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>
<input id="questionId21" name="questionId21" type="hidden" value="97" />    <div class="questionPage emg-test" id ="21"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>21</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Haluatko olla mukana varmistamassa yhteiskuntamme toimintakyvyn myös poikkeusoloissa ja kriisitilanteissa?</span>
                </div>
                <div id="rdoBtnDiv21" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnNext" value="Seuraava kysymys" id="btnNext" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>
<input id="questionId22" name="questionId22" type="hidden" value="98" />    <div class="questionPage emg-test" id ="22"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>22</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Haluatko tehdä töitä lasten ja nuorten parissa?</span>
                </div>
                <div id="rdoBtnDiv22" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnNext" value="Seuraava kysymys" id="btnNext" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>
<input id="questionId23" name="questionId23" type="hidden" value="99" />    <div class="questionPage emg-test" id ="23"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>23</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Pidätkö vanhusten ja sairaiden auttamisesta?</span>
                </div>
                <div id="rdoBtnDiv23" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnNext" value="Seuraava kysymys" id="btnNext" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>
<input id="questionId24" name="questionId24" type="hidden" value="100" />    <div class="questionPage emg-test" id ="24"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>24</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Stressi on yhä näkyvämpi osa nykypäivää - haluatko toimia sen vähentämiseksi?</span>
                </div>
                <div id="rdoBtnDiv24" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnNext" value="Seuraava kysymys" id="btnNext" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>
<input id="questionId25" name="questionId25" type="hidden" value="101" />    <div class="questionPage emg-test" id ="25"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>25</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Ovatko terveys, liikunta ja urheilu sinulle tärkeitä?</span>
                </div>
                <div id="rdoBtnDiv25" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnNext" value="Seuraava kysymys" id="btnNext" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>
<input id="questionId26" name="questionId26" type="hidden" value="102" />    <div class="questionPage emg-test" id ="26"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>26</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Oletko kiinnostunut tekniikasta ja haluaisit keksiä ja kehittää uusia teknisiä laitteita?</span>
                </div>
                <div id="rdoBtnDiv26" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnNext" value="Seuraava kysymys" id="btnNext" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>
<input id="questionId27" name="questionId27" type="hidden" value="103" />    <div class="questionPage emg-test" id ="27"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>27</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Onko sinulla ajokortti ja haluaisit ajaa työksesi autoa?</span>
                </div>
                <div id="rdoBtnDiv27" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnNext" value="Seuraava kysymys" id="btnNext" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>
<input id="questionId28" name="questionId28" type="hidden" value="104" />    <div class="questionPage emg-test" id ="28"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>28</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Pidätkö teknisistä laitteista ja olet aina ajan tasalla tekniikan uusissa villityksissä?</span>
                </div>
                <div id="rdoBtnDiv28" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnNext" value="Seuraava kysymys" id="btnNext" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>
<input id="questionId29" name="questionId29" type="hidden" value="105" />    <div class="questionPage emg-test" id ="29"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>29</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Suojeletko luontoa ja pidät huolta ympäristöstä?</span>
                </div>
                <div id="rdoBtnDiv29" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnNext" value="Seuraava kysymys" id="btnNext" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>
<input id="questionId30" name="questionId30" type="hidden" value="106" />    <div class="questionPage emg-test" id ="30"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>30</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Haluaisitko työskennellä eläinten parissa?</span>
                </div>
                <div id="rdoBtnDiv30" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnNext" value="Seuraava kysymys" id="btnNext" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>
<input id="questionId31" name="questionId31" type="hidden" value="107" />    <div class="questionPage emg-test" id ="31"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>31</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Vietätkö mielelläsi paljon aikaa tietokoneen ääressä?</span>
                </div>
                <div id="rdoBtnDiv31" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnNext" value="Seuraava kysymys" id="btnNext" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>
<input id="questionId32" name="questionId32" type="hidden" value="108" />    <div class="questionPage emg-test" id ="32"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>32</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Oletko kätevä käsistäsi ja hyvä korjaamaan teknisiä laitteita?</span>
                </div>
                <div id="rdoBtnDiv32" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnNext" value="Seuraava kysymys" id="btnNext" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>
<input id="questionId33" name="questionId33" type="hidden" value="109" />    <div class="questionPage emg-test" id ="33"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>33</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Onko/oliko luonnontieteet yksi lempiaineistasi koulussa?</span>
                </div>
                <div id="rdoBtnDiv33" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnNext" value="Seuraava kysymys" id="btnNext" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>
<input id="questionId34" name="questionId34" type="hidden" value="110" />    <div class="questionPage emg-test" id ="34"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>34</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Kiinnostaako sinua rikollisen toiminnan ehkäiseminen?</span>
                </div>
                <div id="rdoBtnDiv34" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnNext" value="Seuraava kysymys" id="btnNext" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>
<input id="questionId35" name="questionId35" type="hidden" value="111" />    <div class="questionPage emg-test" id ="35"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>35</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Oletko valmis tekemään töitä iltaisin ja viikonloppuisin?</span>
                </div>
                <div id="rdoBtnDiv35" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnNext" value="Seuraava kysymys" id="btnNext" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>
<input id="questionId36" name="questionId36" type="hidden" value="333" />    <div class="questionPage emg-test" id ="36"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>36</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Haluatko toimia onnettomuuksien ehkäisemiseksi?</span>
                </div>
                <div id="rdoBtnDiv36" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnNext" value="Seuraava kysymys" id="btnNext" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>
<input id="questionId37" name="questionId37" type="hidden" value="334" />    <div class="questionPage emg-test" id ="37"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>37</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Haluaisitko asua maalla?</span>
                </div>
                <div id="rdoBtnDiv37" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnNext" value="Seuraava kysymys" id="btnNext" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>
<input id="questionId38" name="questionId38" type="hidden" value="335" />    <div class="questionPage emg-test" id ="38"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>38</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Onko luonnoilmiöiden ja -katastrofien tutkiminen sinusta mielenkiintoista?</span>
                </div>
                <div id="rdoBtnDiv38" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnNext" value="Seuraava kysymys" id="btnNext" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>
<input id="questionId39" name="questionId39" type="hidden" value="336" />    <div class="questionPage emg-test" id ="39"  style="display:none" >
        
        <div class="row">
            <div class="columns text-center">

                <div class="emg-test-steps">
                    <span id="lblNrOfQuestions">Kysymys <b>39</b> / <b>39</b></span>
                    <br /><br />
                </div>
                <div class="emg-test-questions callout primary">
                    <span id="lblQuestionText">Oletko valmis tekemään työtä turvallisemman tulevaisuuden puolesta?</span>
                </div>
                <div id="rdoBtnDiv39" class="emg-test-answers">
                    <input id="rdoBtnYes" type="radio" name="rdoBtn" value="1" class="required" /><label for="rdoBtnYes">Kyllä</label>
                    <input id="rdoBtnNo" type="radio" name="rdoBtn" value="0" /><label for="rdoBtnNo">Ei</label><br />
                    <label id="lblError" style="color:Red; display:none; margin-top:15px;">  Valitse vaihtoehto </label><br />
                </div>
                <div class="emg-test-buttons">
                    <br />
                        <input type="button" name="btnLast" value="Tuloksiin" id="btnLast" class="button-big button-big-cta button-full" />
                </div>
            </div>
        </div>

    </div>

<form action="/EducationTest/Result" id="saveTestForm" method="post">    <div id="lastPage" style="display: none;">

        <div class="TestQuestion">
            Olet nyt suorittanut ammatinvalintatestin! Lisää sähköpostiosoitteesi alle, niin pääset tuloksiisi.
        </div>
        <div class="TestButtons">

            <input data-val="true" data-val-number="The field TestId must be a number." data-val-required="The TestId field is required." id="Response_TestId" name="Response.TestId" type="hidden" value="11" />
            <input id="Response_Answers" name="Response.Answers" type="hidden" value="" />

            <div id="pnlLast" style="margin-bottom: 20px">
                <br />
                <label>Sähköposti </label>
                <input data-val="true" data-val-email="Korjaa sähköpostiosoite oikeaan muotoon." data-val-required="Required field" id="Response_Email" name="Response.Email" type="text" value="" />
                <br/>
                <fieldset>
                    <div>
                        <input id="Response_ResponseFields_0__SortOrder" name="Response.ResponseFields[0].SortOrder" type="hidden" value="1" />
                        <input id="Response_ResponseFields_0__Name" name="Response.ResponseFields[0].Name" type="hidden" value="Age" />
                        <input id="Response_ResponseFields_0__FieldType" name="Response.ResponseFields[0].FieldType" type="hidden" value="Age" />

                        

<label>Ik&#228;</label>
<select id="Response_ResponseFields_0__Value" name="Response.ResponseFields[0].Value"><option value="">---- Select age ----</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
<option value="17">17</option>
<option value="18">18</option>
<option value="19">19</option>
<option value="20">20</option>
<option value="21">21</option>
<option value="22">22</option>
<option value="23">23</option>
<option value="24">24</option>
<option value="25">25</option>
<option value="26">26</option>
<option value="27">27</option>
<option value="28">28</option>
<option value="29">29</option>
<option value="30">30</option>
<option value="31">31</option>
<option value="32">32</option>
<option value="33">33</option>
<option value="34">34</option>
<option value="35">35</option>
<option value="36">36</option>
<option value="37">37</option>
<option value="38">38</option>
<option value="39">39</option>
<option value="40">40</option>
<option value="41">41</option>
<option value="42">42</option>
<option value="43">43</option>
<option value="44">44</option>
<option value="45">45</option>
<option value="46">46</option>
<option value="47">47</option>
<option value="48">48</option>
<option value="49">49</option>
<option value="50">50</option>
<option value="51">51</option>
<option value="52">52</option>
<option value="53">53</option>
<option value="54">54</option>
<option value="55">55</option>
<option value="56">56</option>
<option value="57">57</option>
<option value="58">58</option>
<option value="59">59</option>
<option value="60">60</option>
<option value="61">61</option>
<option value="62">62</option>
<option value="63">63</option>
<option value="64">64</option>
<option value="65">65</option>
<option value="66">66</option>
<option value="67">67</option>
<option value="68">68</option>
<option value="69">69</option>
<option value="70">70</option>
<option value="71">71</option>
<option value="72">72</option>
<option value="73">73</option>
<option value="74">74</option>
<option value="75">75</option>
<option value="76">76</option>
<option value="77">77</option>
<option value="78">78</option>
<option value="79">79</option>
<option value="80">80</option>
<option value="81">81</option>
<option value="82">82</option>
<option value="83">83</option>
<option value="84">84</option>
<option value="85">85</option>
<option value="86">86</option>
<option value="87">87</option>
<option value="88">88</option>
<option value="89">89</option>
<option value="90">90</option>
<option value="91">91</option>
<option value="92">92</option>
<option value="93">93</option>
<option value="94">94</option>
<option value="95">95</option>
<option value="96">96</option>
<option value="97">97</option>
<option value="98">98</option>
<option value="99">99</option>
</select>
<br/>

                    </div>
                    <div>
                        <input id="Response_ResponseFields_1__SortOrder" name="Response.ResponseFields[1].SortOrder" type="hidden" value="2" />
                        <input id="Response_ResponseFields_1__Name" name="Response.ResponseFields[1].Name" type="hidden" value="Category" />
                        <input id="Response_ResponseFields_1__FieldType" name="Response.ResponseFields[1].FieldType" type="hidden" value="Category" />

                        

<label>
    Sinua kiinnostavat koulutusalat
</label>
<select name="Response.ResponseFields[1].Value" id="Response.ResponseFields[1].Value"><option value="" selected="">---- Select category ----</option><option value="2120"  >Abikurssit</option><option value="4"  >Arkkitehtuuri</option><option value="260"  >Elintarvikeala</option><option value="4769"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Leipuri</option><option value="197"  >Eläimiin liittyvä koulutus</option><option value="3886"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Eläinten koulutus</option><option value="3887"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Eläintenhoito</option><option value="3888"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hevosala</option><option value="4428"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Koira-ala</option><option value="205"  >Filosofia</option><option value="115"  >Hieronta</option><option value="166"  >Historia</option><option value="108"  >Hotelli-, ravintola- ja catering-ala</option><option value="950"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Baarimikko</option><option value="3889"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kokki</option><option value="3890"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tarjoilija</option><option value="3891"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vastaanottovirkailija</option><option value="85"  >Kasvatusala / Opetus / Pedagogiikka</option><option value="3892"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lastenohjaaja</option><option value="2222"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Opettaja</option><option value="537"  >Kauneudenhoitoala</option><option value="1777"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kosmetologi</option><option value="3895"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meikkaaja / Maskeeraaja</option><option value="1778"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Parturi-kampaaja</option><option value="3896"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Stylisti</option><option value="11"  >Kauppatiede / Liiketalous</option><option value="686"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Johtaminen</option><option value="665"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kansainvälinen liiketoiminta</option><option value="106"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Markkinointi / Myynti</option><option value="670"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Taloushallinto</option><option value="668"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yrittäjyys</option><option value="67"  >Kielet / Kirjallisuus</option><option value="799"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Arabia</option><option value="745"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Englanti</option><option value="752"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Espanja</option><option value="772"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Italia</option><option value="740"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Japani</option><option value="777"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kiina</option><option value="830"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Korea</option><option value="808"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kreikka</option><option value="812"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Latina</option><option value="786"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Portugali</option><option value="759"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ranska</option><option value="790"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ruotsi</option><option value="834"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Saamen kieli</option><option value="765"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Saksa</option><option value="805"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Suomi</option><option value="781"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Venäjä</option><option value="794"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Viittomakieli</option><option value="177"  >Kiinteistönhoito / Kodinhoito / Puhdistusala</option><option value="239"  >Kuljetus / Liikenne</option><option value="3897"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kuljettaja</option><option value="1119"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lentäjä</option><option value="865"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Logistiikka</option><option value="2223"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Merenkulkuala</option><option value="3898"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Varastoala</option><option value="253"  >Liikunta / Urheilu</option><option value="119"  >Lukiokoulutus</option><option value="971"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aikuislukiot</option><option value="969"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Erikoislukiot</option><option value="41"  >Luonnontieteet</option><option value="3899"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Biologia</option><option value="3900"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fysiikka</option><option value="3901"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kemia</option><option value="210"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Maantiede</option><option value="35"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Matematiikka</option><option value="40"  >Lääketiede / Farmasia</option><option value="2219"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Eläinlääkäri</option><option value="2221"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Farmaseutti</option><option value="2220"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hammaslääkäri</option><option value="905"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lääkäri</option><option value="606"  >Maahanmuuttajakoulutus</option><option value="234"  >Maatalous</option><option value="224"  >Matkailuala</option><option value="23"  >Media / Viestintä</option><option value="3912"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Elokuva-ala</option><option value="712"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Journalismi</option><option value="3913"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Peliala</option><option value="708"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TV / Radio</option><option value="717"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Valokuvaus</option><option value="3911"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Viestintä</option><option value="3902"  >Metsätalous</option><option value="186"  >Muotoilu / Käsityö</option><option value="1065"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Graafinen suunnittelu</option><option value="3905"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metalli- ja jalometalliala</option><option value="3904"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Puuala</option><option value="1053"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sisustusala</option><option value="1064"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tekstiiliala</option><option value="1057"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vaatetusala ja muoti</option><option value="31"  >Oikeustiede</option><option value="3951"  >Perusopetus</option><option value="51"  >Psykologia / Käyttäytymistiede</option><option value="3903"  >Puutarha-ala</option><option value="2218"  >Rakennusala</option><option value="3907"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Maalari</option><option value="3908"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Maarakennusala</option><option value="3909"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Putkiasentaja</option><option value="3906"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Talonrakentaja</option><option value="3023"  >Sihteeri</option><option value="61"  >Sosiaali- ja terveysala</option><option value="922"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fysioterapeutti</option><option value="919"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hammashoito</option><option value="2935"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lähihoitaja</option><option value="2936"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sairaanhoitaja</option><option value="2162"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sosiaaliala</option><option value="2937"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Terveydenhoitaja</option><option value="4988"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Terveystieteet</option><option value="125"  >Taide / Kulttuuri</option><option value="980"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kuvataide</option><option value="975"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Musiikki</option><option value="984"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Teatteri / Tanssi</option><option value="73"  >Tekniikan ala</option><option value="3910"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Autoala</option><option value="10"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Diplomi-insinööri</option><option value="877"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Elektroniikka</option><option value="24"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Insinööri</option><option value="868"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Koneet / Teollisuus</option><option value="872"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sähköasentaja / Automaatioasentaja</option><option value="92"  >Tietotekniikka / Ohjelmointi</option><option value="128"  >Turvallisuus / Maanpuolustus</option><option value="82"  >Uskontotiede / Teologia</option><option value="98"  >Valmentava koulutus</option><option value="57"  >Yhteiskuntatieteet</option><option value="223"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sosiologia</option><option value="733"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Valtio-oppi</option><option value="231"  >Ympäristö / Luonto</option></select>
<br />

                    </div>
                </fieldset>

                
                <div class="emg-acceptance">
    <input type="checkbox" name="approvedConditions" id="approvedConditions" class="checkbox-custom" data-val="true" value="" data-val-brequired="Required field"
        checked=&#39;checked&#39; />
    <label for="approvedConditions" id="approvedConditionsLabel" class="checkbox-custom-label">
        <span>
            Hyv&#228;ksyn studentum.fi:n&nbsp;
            <a target="_blank" href="https://www.studentum.fi/kayttoehdot/">K&#228;ytt&#246;ehdot</a> &
            <a target="_blank" href="https://www.studentum.fi/tietosuojaseloste/">Tietosuojak&#228;yt&#228;nn&#246;n</a>
        </span>
    </label>
</div>

                <input type="submit" name="btnFinish" value="L&#228;het&#228;" id="btnFinish" class="button-big-cta button-full"/>
            </div>
                <div><em>Klikkaa "Lähetä" nähdäksesi tuloksesi! Tuloksesi lähetetään myös yllä antamaasi sähköpostiosoitteeseen. Tallennamme sähköpostiosoitteesi, jotta voimme lähettää sinulle ajankohtaista tietoa koulutuksista. Mikäli et halua saada meiltä sähköpostia, voit milloin tahansa poistaa sähköpostiosoitteesi rekisteristämme.</em></div>
        </div>
    </div>
</form>
<div style="margin-top: 20px; margin-bottom:20px;">

</div>

<style type="text/css">
	.off-canvas-wrapper + .autoCompleteSearchList {
		margin-top: 16px;
		border: solid 1px #dcdcdc;
		border-top: none;
	}
	.off-canvas-wrapper + .autoCompleteSearchList:before {display: none;}
</style>

<script type="text/javascript">

    $(document).ready(function () {
        var questionId = 1;
        var answers = new String();

        $('#btnStart').click(function () {
            $("#startPage").hide();
            $("#1").show();
            $('body,html').animate({ scrollTop: 0 }, 0);
        });

        $('input[name=btnNext]').click(function () {
            if ($("input[name=rdoBtn]:visible").is(":checked")) {
                $("#" + questionId).hide();
                answers += $("input[name=rdoBtn]:checked").val() + ":" + $("#questionId" + questionId).val() + ",";
                questionId++;
                $("#" + questionId).show();
            }
            else {
                $("#rdoBtnDiv" + questionId + " #lblError").show();
            }
        });

        $('input[name=btnLast]').click(function () {
            if ($("input[name=rdoBtn]:visible").is(":checked")) {
                answers += $("input[name=rdoBtn]:checked").val() + ":" + $("#questionId" + questionId).val();
                $("#Response_Answers").val(answers);
                $("#" + questionId).hide();
                $("#lastPage").show();
            }
            else {
                $("#rdoBtnDiv" + questionId + " #lblError").show();
            }
        });
    });

    $('#saveTestForm').submit(function(e) {
        e.preventDefault();
    }).validate({
        submitHandler: function(form) {
            if (!$('#lastPage #approvedConditions').is(':checked')) {
                alert('Jotta voit jatkaa sivustomme käyttämistä, ole hyvä ja hyväksy käyttöehdot ja tietosuojakäytäntö.');
                $(this).find('label').css("color", "red");
                return false;
            }
            else
                {
            $(form).find('#btnFinish').attr('disabled', 'disabled');
            form.submit();
                }
        },
        rules: {
            'Response.Age': {
                required: true,
                number: true,
                range: [6, 120]
            },
            'Response.Email': {
                required: true,
                email: true
            }
                ,
            'Response.ResponseFields[0].Value' : {
                required: true
            },
            'Response.ResponseFields[0].Value-ac' : {
                required: true
            }
                
                ,
            'Response.ResponseFields[1].Value' : {
                required: true
            },
            'Response.ResponseFields[1].Value-ac' : {
                required: true
            }
                
        },
        messages: {
            'Response.Age': {
                required: 'Required Field',
                number: 'The field must be number',
                range: 'The value must be a number between 6 and 120'
                    },
            'Response.Email': {
                required: 'Required Field',
                email: 'Please enter a valid email address'
            }
                ,
            'Response.ResponseFields[0].Value': {
                required: 'Required Field',
                validateRegex : 'Invalid phone number'
            },
            'Response.ResponseFields[0].Value-ac': {
                required: 'Required Field'
            }
                
                ,
            'Response.ResponseFields[1].Value': {
                required: 'Required Field',
                validateRegex : 'Invalid phone number'
            },
            'Response.ResponseFields[1].Value-ac': {
                required: 'Required Field'
            }
                
        },
        errorPlacement: function (error, element) {
            element.after(error);
        }
    });
</script>

        </section>
    </div>
</div>



								
							</div>
							<div class="large-3 medium-12 columns col-rcb">
								<section>
        <a name="HtmlPage"></a>
        <div  class="rcb rcb-color-gray HtmlPage">
                <div class="rcb-head">
                    <div class="h2">Hy&#246;dyllisi&#228; linkkej&#228;</div>
                </div>
            <div class="rcb-body content padding">
                <p><span style="color: #000000;"><a href="/tietoa-opiskelijalle/aikuiskoulutustuki-13789" class="button-full button-big-lightgray">Aikuiskoulutuksen rahoitus</a></span></p>
<p><span style="color: #000000;"><a href="/EducationTest/Start/11" class="button-full button-big-lightgray">Ammatinvalintatesti</a></span></p>
<p><span style="color: #000000;"><a href="/loyda-koulutuksesi/opiskelu-ulkomailla/mika-euroopan-unioni-18472" class="button-full button-big-lightgray">EU &amp; Minä </a></span></p>
<p><span style="color: #000000;"><a href="/tietoa-hakijalle/paasykokeet/" class="button-full button-big-lightgray">Pääsykokeet</a></span></p>
<p><span style="color: #000000;"><a href="/tietoa-hakijalle/yhteishaku-7012" class="button-full button-big-lightgray">Yhteishaku</a></span></p>
<p><span style="color: #000000;"><a href="/tietoa-hakijalle/jatkuva-haku-13180" class="button-full button-big-lightgray">Jatkuva haku</a></span></p>
<p><span style="color: #000000;"><a href="/tyo-ja-palkka/" class="button-full button-big-lightgray">Työ &amp; palkka</a></span></p>
<p><span style="color: #000000;"><a href="/tietoa-hakijalle/mita-sinun-tulee-tietaa-oppisopimuksesta-14074" class="button-full button-big-lightgray">Oppisopimuskoulutus</a></span></p>
<p><span style="color: #000000;"><a href="/tietoa-studentumista/tietoa-opoille-3782" class="button-full button-big-lightgray">Opoille</a></span></p>
<p><span style="color: #000000;"><a href="/loyda-koulutuksesi/infopaketti-maahanmuuttajille-13836" class="button-full button-big-lightgray">Info maahanmuuttajille</a></span></p>
<p><span style="color: #000000;"><a href="/tietoa-hakijalle/usein-kysytyt-kysymykset-12304" class="button-full button-big-lightgray">Usein kysytyt kysymykset</a></span></p>


            </div>
        </div>
        <a name="RightColumns-NewsletterRcb"></a>
        <div  class="rcb rcb-color-gray RightColumns-NewsletterRcb">
                <div class="rcb-head">
                    <div class="h2">Apua opiskelupaikan valintaan?</div>
                </div>
            <div class="rcb-body content padding">
                
   
<span id="spSignUpForNewsLetter" >Tilaa uutiskirjeemme ja pysy k&#228;rryill&#228;! Saat mm. tietoa hakuajoista ja vinkkej&#228; opiskelupaikan valintaan.</span>

<span id="spSendMessage" style="display:none"><b><br /><font color="red">Olet nyt rekisteröitynyt Studentum.fi uutiskirjeen saamista varten.</font></b><br /></span>

<div id="spEmail" style="display:none">Sähköposti</div>
<br />
<div class="rc_newsletter form_NewsletterTo">
    <form id="newsLetterForm-rcb">
        <input id="txtTo" name="txtTo" type="text" class="form_NewsletterTo required email" placeholder="Kirjoita s&#228;hk&#246;postiosoitteesi t&#228;h&#228;n" />
        <div class="emg-acceptance email-info">
            <input type="checkbox" name="approvedConditions" id="approvedConditions" data-val="true" value="" data-val-brequired="Required field"
                   checked=&#39;checked&#39; />
            <label for="approvedConditions" id="approvedConditionsLabel">
                <span>
                    Hyv&#228;ksyn studentum.fi:n&nbsp;
                    <a target="_blank" href="https://www.studentum.fi/kayttoehdot/"> K&#228;ytt&#246;ehdot</a> &
                    <a target="_blank" href="https://www.studentum.fi/tietosuojaseloste/"> Tietosuojak&#228;yt&#228;nn&#246;n</a>
                </span>
            </label>
        </div>
        <span id="acceptanceErrorMessage" name="acceptanceErrorMessage" class="emg-error"></span>
        <input id="btnSend" name="btnSend" type="submit" class="button-big-blue button-full form_NewsletterButton" value="Kyll&#228; kiitos!" style="margin-top: 5px;" />
        <span id="spErrorMessage" name="spErrorMessage" class="emg-error"></span>
    </form>
</div>
<script type="text/javascript">
    function rcbNewsletterSubscribe() {
        $.post('/newsletter/rcb-subscribe?email=' + $('#txtTo').val(),
            function (obj) {
                if (obj.sent) {
                    $('#txtTo').val('');
                    $("#spSendMessage").show(); 
                }
            }
        );
    }

	$("#newsLetterForm-rcb").validate(
        {
            submitHandler: function (f) {
                rcbNewsletterSubscribe();
            },
            rules: {
                approvedConditions: {
                    required: true
                }
            },
            messages: {
                txtTo: "<br />Sähköpostiosoitteesi puuttuu",
                approvedConditions: {
                    required: "Jotta voit jatkaa sivustomme käyttämistä, ole hyvä ja hyväksy käyttöehdot ja tietosuojakäytäntö."
                }
            },
            errorPlacement: function (error, element) {
                if (element.attr("name") === "approvedConditions") {
                    $("#acceptanceErrorMessage").show();
                    error.appendTo($("#acceptanceErrorMessage"));
                } else {
                    $("#spErrorMessage").show();
                    error.appendTo($("#spErrorMessage"));
                }
            },
            //success: function(element) {
            //    $("#spErrorMessage").hide();
            //},
            debug:true
            });               
</script>
            </div>
        </div>
        <a name="HtmlPage"></a>
        <div  class="rcb rcb-color-gray rcb-nopadding rcb-noheader HtmlPage">
            <div class="rcb-body content">
                <div class="emg-columns emg-columns-1 emg-background-flex">
<div class="emg-column"><a href="https://www.koulutus.fi/" target="_blank" rel="noopener"><img src="https://img.emg-services.net/HtmlPages/HtmlPage15745/blue_rcb_logolla_698x394.jpg" alt="koulutus.fi" title="koulutus.fi"></a></div>
</div>


            </div>
        </div>

								</section>
							</div>
							<div class="large-3 medium-12 columns col-ads">
								
        <div class="col-ads-container">
		
			<div class="adunit google-ad-right" data-adunit="studentum_fi_ad_rcb1" data-dimensions="300x250"></div>
			<div class="adunit google-ad-right" data-adunit="studentum_fi_ad_rcb2" data-dimensions="300x250"></div>
			<div class="adunit google-ad-right" data-adunit="studentum_fi_ad_rcb3" data-dimensions="300x250"></div>
			<div class="adunit google-ad-right" data-adunit="studentum_fi_ad_rcb4" data-dimensions="300x250"></div>
			<div class="adunit google-ad-right" data-adunit="studentum_fi_ad_rcb5" data-dimensions="300x250"></div>
	</div>
							</div>
						</div>
				                <div class="row row-body row-bot">
                    <div class="large-12 columns col-bot">
                        <section id="emg-bot">
                            
                        </section>
                    </div>
                </div>
                <div class="row row-crumbs">
                    <div class="large-12 columns col-crumbs">
                    </div>
                </div>
            </main>

            
            <footer id="footer" class="row-foot">
                <div class="row row-foot-menu">
                    <div class="small-12 columns">
                                <div class="row row-foot-menu-inner">
                    <div class="medium-3 small-12 columns col-foot-menu">
                        <a title="L&#246;yd&#228; koulutuksesi" class="footer-link-label">L&#246;yd&#228; koulutuksesi</a>
                        <ul class="footer-list footer-list-menu">
                                <li>
                                    <a href="/koulutushaku/" target="_self" id="footer-Koulutushaku-4398" title="Koulutushaku"  class="footer-link">Koulutushaku</a>
                                </li>
                                <li>
                                    <a href="/EducationTest/Start/11" target="_self" id="footer-Ammatinvalintatesti-2795" title="Ammatinvalintatesti"  class="footer-link">Ammatinvalintatesti</a>
                                </li>
                                <li>
                                    <a href="/loyda-koulutuksesi/opiskelu-ulkomailla/" target="_self" id="footer-Opiskelu_ulkomailla-4604" title="Opiskelu ulkomailla"  class="footer-link">Opiskelu ulkomailla</a>
                                </li>
                                <li>
                                    <a href="/?cmpscreencustom" target="_self" id="footer-Evaesteasetukset-5904" title="Ev&#228;steasetukset"  class="footer-link">Ev&#228;steasetukset</a>
                                </li>
                        </ul>
                    </div>
                    <div class="medium-3 small-12 columns col-foot-menu">
                        <a title="Hakijalle" class="footer-link-label">Hakijalle</a>
                        <ul class="footer-list footer-list-menu">
                                <li>
                                    <a href="/tietoa-hakijalle/yhteishaku-7012" target="_self" id="footer-Yhteishaku-3075" title="Yhteishaku"  class="footer-link">Yhteishaku</a>
                                </li>
                                <li>
                                    <a href="/tietoa-hakijalle/lisahaku-6065" target="_self" id="footer-Lisaehaku-3076" title="Lis&#228;haku"  class="footer-link">Lis&#228;haku</a>
                                </li>
                                <li>
                                    <a href="/tietoa-opiskelijalle/ylioppilaskirjoitukset-7778" target="_self" id="footer-Ylioppilaskirjoitukset-5244" title="Ylioppilaskirjoitukset"  class="footer-link">Ylioppilaskirjoitukset</a>
                                </li>
                                <li>
                                    <a href="/tietoa-hakijalle/paasykokeet/" target="_self" id="footer-Paeaesykokeet-3077" title="P&#228;&#228;sykokeet"  class="footer-link">P&#228;&#228;sykokeet</a>
                                </li>
                        </ul>
                    </div>
                    <div class="medium-3 small-12 columns col-foot-menu">
                        <a title="Ty&#246;el&#228;m&#228;" class="footer-link-label">Ty&#246;el&#228;m&#228;</a>
                        <ul class="footer-list footer-list-menu">
                                <li>
                                    <a href="/tyo-ja-palkka/" target="_self" id="footer-Tyoe_palkka-5599" title="Ty&#246; &amp; palkka"  class="footer-link">Ty&#246; &amp; palkka</a>
                                </li>
                                <li>
                                    <a href="/tietoa-tyoelamasta/tyoelamatietoa-ammattialoista/" target="_self" id="footer-Tyoeelaemaetietoa_ammattialoista-5243" title="Ty&#246;el&#228;m&#228;tietoa ammattialoista"  class="footer-link">Ty&#246;el&#228;m&#228;tietoa ammattialoista</a>
                                </li>
                                <li>
                                    <a href="/tietoa-tyoelamasta/ammattilaisten-haastatteluja/" target="_self" id="footer-Ammattilaisten_haastatteluja-2633" title="Ammattilaisten haastatteluja"  class="footer-link">Ammattilaisten haastatteluja</a>
                                </li>
                                <li>
                                    <a href="/tietoa-tyoelamasta/tyoharjoittelu-8814" target="_self" id="footer-Tyoeharjoittelu-3235" title="Ty&#246;harjoittelu"  class="footer-link">Ty&#246;harjoittelu</a>
                                </li>
                                <li>
                                    <a href="/tietoa-tyoelamasta/vinkkeja-tyoelamaan-13426" target="_self" id="footer-Vinkkejae_tyoeelaemaeaen-3228" title="Vinkkej&#228; ty&#246;el&#228;m&#228;&#228;n"  class="footer-link">Vinkkej&#228; ty&#246;el&#228;m&#228;&#228;n</a>
                                </li>
                        </ul>
                    </div>
                    <div class="medium-3 small-12 columns col-foot-menu">
                        <a title="Oppilaitoksille" class="footer-link-label">Oppilaitoksille</a>
                        <ul class="footer-list footer-list-menu">
                                <li>
                                    <a href="https://oppilaitoksille.studentum.fi/artikkelit" target="_self" id="footer-Blogi-5516" title="Blogi oppilaitoksille - opiskelijamarkkinointi"  class="footer-link">Blogi</a>
                                </li>
                                <li>
                                    <a href="https://oppilaitoksille.studentum.fi/asiakkaidemme-suositukset" target="_self" id="footer-Referenssit-5803" title="Referenssej&#228; asiakkailtamme"  class="footer-link">Referenssit</a>
                                </li>
                                <li>
                                    <a href="https://oppilaitoksille.studentum.fi/" target="_self" id="footer-Markkinoi_oppilaitostanne-5802" title="Mainosta studentum.fi:ss&#228;"  class="footer-link">Markkinoi oppilaitostanne</a>
                                </li>
                        </ul>
                    </div>
        </div>

                    </div>
                </div>
                <div class="emg-sites" id="sites-dd">
	<div class="emg-sites-inner">
		<h2>EMG-konserniin kuuluvat sivustot</h2>
		<div class="emg-sites-wrapper">
			<div class="emg-sites-column">
				<h3>Scandinavia</h3>
				<div class="emg-sites-region">
					<h4><span class="emg-flag-icon se"></span> Sweden</h4>
					<a href="https://www.aktivitet.se" class="site-footer-link" target="_blank" rel=&quot;nofollow&quot;> aktivitet.se</a><br />
					<a href="https://www.allastudier.se" class="site-footer-link" target="_blank" rel=&quot;nofollow&quot;> allastudier.se</a><br />
					<a href="https://www.blueberry.nu" class="site-footer-link" target="_blank" rel=&quot;nofollow&quot;> blueberry.nu</a><br />
					<a href="https://www.gymnasium.se" class="site-footer-link" target="_blank" rel=&quot;nofollow&quot;> gymnasium.se</a><br />
					<a href="https://www.gymnasiesärskola.se" class="site-footer-link" target="_blank" rel=&quot;nofollow&quot;> gymnasiesärskola.se</a><br />
					<a href="https://www.kurser.se" class="site-footer-link" target="_blank" rel=&quot;nofollow&quot;> kurser.se</a><br />
					<a href="https://www.studentum.se" class="site-footer-link" target="_blank" rel=&quot;nofollow&quot;> studentum.se</a><br />
					<a href="https://www.utbildning.se" class="site-footer-link" target="_blank" rel=&quot;nofollow&quot;> utbildning.se</a>
				</div>
			</div>
			<div class="emg-sites-column">
				<h3>&nbsp;</h3>
					<div class="emg-sites-region">
						<h4><span class="emg-flag-icon dk"></span> Denmark</h4>
						<a href="https://www.finduddannelse.dk" class="site-footer-link" target="_blank" rel=&quot;nofollow&quot;> finduddannelse.dk</a><br />
						<a href="https://www.kurserforledige.com" class="site-footer-link" target="_blank" rel=&quot;nofollow&quot;> kurserforledige.com</a><br />
						<a href="https://www.studentum.dk" class="site-footer-link" target="_blank" rel=&quot;nofollow&quot;> studentum.dk</a><br />
					</div>
					<div class="emg-sites-region">
						<h4><span class="emg-flag-icon fi"></span> Finland</h4>
						<a href="https://www.koulutus.fi" class="site-footer-link" target="_blank" rel=&quot;nofollow&quot;> koulutus.fi</a><br />
						<a href="https://www.studentum.fi" class="site-footer-link" target="_blank" rel=&quot;nofollow&quot;> studentum.fi</a><br />
					</div>
					<div class="emg-sites-region">
						<h4><span class="emg-flag-icon no"></span> Norway</h4>
						<a href="https://www.studentum.no" class="site-footer-link" target="_blank" rel=&quot;nofollow&quot;> studentum.no</a><br />
					</div>
			</div>
			<div class="emg-sites-column">
				<h3>Eurooppa</h3>
				<div class="emg-sites-region">
					<h4><span class="emg-flag-icon fr"></span> France</h4>
					<a href="https://www.topformation.fr" class="site-footer-link" target="_blank" rel=&quot;nofollow&quot;> topformation.fr</a><br />
				</div>
				<div class="emg-sites-region">
					<h4><span class="emg-flag-icon de"></span> Germany</h4>
					<a href="https://www.kursfinder.de" class="site-footer-link" target="_blank" rel=&quot;nofollow&quot;> kursfinder.de</a><br />
				</div>
				<div class="emg-sites-region">
					<h4><span class="emg-flag-icon nl"></span> Netherlands</h4>
					<a href="https://www.studentum.nl" class="site-footer-link" target="_blank" rel=&quot;nofollow&quot;> studentum.nl</a><br />
				</div>
				<div class="emg-sites-region">
					<h4><span class="emg-flag-icon gb"></span> United Kingdom</h4>
					<a href="https://www.findcourses.co.uk" class="site-footer-link" target="_blank" rel=&quot;nofollow&quot;> findcourses.co.uk</a><br />
				</div>
			</div>
			<div class="emg-sites-column">
				<h3>World</h3>
				<div class="emg-sites-region">
					<h4><span class="emg-flag-icon us"></span> United States</h4>
					<a href="https://www.findcourses.com" class="site-footer-link" target="_blank" rel=&quot;nofollow&quot;> findcourses.com</a><br />
					<a href="https://www.searchmba.com" class="site-footer-link" target="_blank" rel=&quot;nofollow&quot;> searchmba.com</a><br />
				</div>
				<div class="emg-sites-region">
					<h4><span class="emg-flag-icon int"></span> Global</h4>
					<a href="https://www.educations.com" class="site-footer-link" target="_blank" rel=&quot;nofollow&quot;> educations.com</a><br />
				</div>
			</div>
		</div>
	</div>
</div>
<section id="emg-footer">
	<div class="emg-footer">
		<div class="row collapse">
			<div class="small-12 columns emg-footer__col">
				<div class="emg-footer__network">
					<div class="emg-footer__network-sites">
						<button class="emg-footer__button">
							
							<div class="emg-footer__button-col">
								<div class="emg-footer__button-labels">
									<div class="emg-footer__button-label">Educations Media Group</div>
									<div class="emg-footer__button-value">
										studentum.fi
									</div>
								</div>
								
							</div>
							<div class="emg-footer__button-col"><i class="fal fa-chevron-down"></i></div>
						
						</button>
					</div>
				</div>
				<div class="emg-footer__social">
							<a href="https://www.facebook.com/studentum.fi" target="_blank" class="footer-social-icon" title="Facebook" rel="nofollow"><i class="fab fa-facebook fa-social"></i></a>
							<a href="https://twitter.com/StudentumFI" target="_blank" class="footer-social-icon" title="Twitter" rel="nofollow"><i class="fab fa-twitter fa-social"></i></a>
							<a href="https://www.instagram.com/studentumfi/" target="_blank" class="footer-social-icon" title="Studentum.fi Instagramissa" rel="nofollow"><i class="fab fa-instagram fa-social"></i></a>
							<a href="https://www.youtube.com/user/StudentumFI" target="_blank" class="footer-social-icon" title="studentum.fi Youtubessa" rel="nofollow"><i class="fab fa-youtube fa-social"></i></a>
				</div>
				<div class="emg-footer__copyright">
					<a href="https://www.educationsmediagroup.com" target="_blank">© Educations Media Group</a>
				</div>				
			</div>
		</div>

	</div>
</section>
<script>
	var footerHeader = $('.footer-header-sites');
	var footerMenu = $('.footer-site-menu');
	var footerToggler = $('.emg-footer__network-sites');
	var footerSites = $('.emg-sites');
	var footerSitesInner = $('.emg-sites-inner');
	var footerOpen = 'is-open';

	footerToggler.click(function () {
		$(this).find('button').toggleClass('is-open');
		$(this).find('i').toggleClass('is-open');
		footerSites.fadeToggle('fast');
	});
	footerToggler.click(function (event) { event.stopPropagation(); });

	footerHeader.click(function () {
			footerMenu.slideToggle('slow');
			$(this).find('i').toggleClass('fa-rotate-180');
	});

	$(window).click(function(e) {
    if (!footerSitesInner.is(e.target) && footerSitesInner.has(e.target).length === 0) {
      footerSites.css('display', 'none');
			footerToggler.toggleClass('is-open');
			footerToggler.find('i').toggleClass('is-open');
    }
	});
</script>
            </footer>
        </div>
	</div>

	


	




	        <div id="admin-content"></div>
        <script>
	        $(function() {
		        $.get('/nocache/get-client-context', function(data) {
			        if (data.isOfficeClient) {
				        var data = {};
				        $.get('/nocache/admin/render-box?' + $.param(data) + '&hideResources=true', function(content) {
					        var contentElement = $('#admin-content');
					        if (content)
						        contentElement.html(content);
					        else
						        contentElement.remove();
				        });
			        }
		        });
	        });
        </script>

	<script type="text/javascript">
		var emgPageContext = {
			page: '',
			pageData: null
		};
	</script>


<script type="text/javascript">
	var emgDesktopOptions = {
		ui: { enableInputStyling: true },
		ads: {
			showPushDownOnce: false,
			webFriendlyDomain: 'studentum_fi'
		}
	}
</script>
	
<script src="https://kit.fontawesome.com/d378a2a9da.js"></script>
	
	<script type="text/javascript" src="//cdn-static.emg-services.net/public/scripts/bundles/emg-desktop-0C9F45F78DD5898CE14CD047BD87F053.js"></script>


     <script data-cmp-vendor="s30" type="text/plain" class="cmplazyload">
        if (typeof (YT) == 'undefined' || typeof (YT.Player) == 'undefined') {
            var tag = document.createElement('script');
            tag.src = "//www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }

        function onYouTubeIframeAPIReady() {
            $(document).trigger('youtube-ready');
            YouTubeLoader.loadFromSelector('.emg-yt-player', {useCookieConsent: true});
        }
    </script>
<script type="text/javascript" data-cmp-vendor="@CookieConsentVendorId.GoogleAds" data-cmp-purpose="@CookieConsentPurposeId.GoogleAdsPurposes" class="cmplazyload" data-cmp-src="/Scripts/bundles/emg/dfp/dfp.js" src="//cdn-static.emg-services.net/public/scripts/bundles/emg-dfp-886495066D76EE4AB9ADED0B7CDABA7B.js"></script>
<script type="text/javascript" src="//cdn-static.emg-services.net/public/scripts/bundles/external-libs-inview-2CB2964C36C83999730A2969869CAE83.js"></script>


<script>
    window.gdprAppliesGlobally = true; if (!("cmp_id" in window)) { window.cmp_id = 32810 }
    emg.ConsentManager.cmpScreen(window);
</script>


</body>
</html>



