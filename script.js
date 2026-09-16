/* ==================================================
   MOBILE MENU
================================================== */

const menuButton =
    document.getElementById("menuButton");

const closeButton =
    document.getElementById("closeButton");

const mobileMenu =
    document.getElementById("mobileMenu");


/* Open menu */

menuButton.addEventListener(
    "click",
    function () {

        mobileMenu.classList.add("active");

        document.body.style.overflow = "hidden";

    }
);


/* Close menu */

closeButton.addEventListener(
    "click",
    function () {

        mobileMenu.classList.remove("active");

        document.body.style.overflow = "";

    }
);


/* Close when clicking a menu link */

const mobileLinks =
    mobileMenu.querySelectorAll("a");


mobileLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                mobileMenu.classList.remove(
                    "active"
                );

                document.body.style.overflow = "";

            }
        );

    }
);


/* ==================================================
   ESC KEY
================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            mobileMenu.classList.remove(
                "active"
            );

            document.body.style.overflow = "";

        }

    }
);


/* ==================================================
   SIMPLE SCROLL REVEAL
================================================== */

const revealElements =
    document.querySelectorAll(
        ".expertise-row, .work-item, .project-card"
    );


const revealObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "show"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.08
        }
    );


revealElements.forEach(
    function (element) {

        revealObserver.observe(element);

    }
);


/* ==================================================
   EMAIL LINK
================================================== */

const emailLink =
    document.querySelector(".email");


emailLink.addEventListener(
    "click",
    function () {

        console.log(
            "Opening Tahzeeb's email..."
        );

    }
);