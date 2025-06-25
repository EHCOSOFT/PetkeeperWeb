$(document).ready(function () {

    // 스크롤 이벤트 처리
    const $header = $('.header');

    if ($header.length) {
        $(window).on('scroll', function () {
            const scrollTop = $(this).scrollTop();

            if (scrollTop > 20) {
                $header.addClass('active');
            } else {
                $header.removeClass('active');
            }
        });
    }

    /**** 모달 이벤트 ****/

    function removeDefaultEvent(e) {
        e.preventDefault();
    }

    // 모달 열기 버튼 클릭 이벤트
    $(".open-modal").click(function () {
        var modalId = $(this).data("modal-id");
        var $modal = $("#" + modalId);
        $("#" + modalId).addClass("active");
        if (!($modal.hasClass("full-modal") || $modal.hasClass("toggle-modal"))) {
            // window.addEventListener("wheel", removeDefaultEvent, { passive: false });
        }

    });

    // 모달 닫기 버튼 클릭 이벤트
    $(".btn-modal-close").click(function () {
        var modal = $(this).closest(".modal-wrap"); // 가장 가까운 모달 찾기
        modal.removeClass("active");
        window.removeEventListener("wheel", removeDefaultEvent);
        window.removeEventListener("touchmove", removeDefaultEvent); // 모달 닫을 때 터치 이벤트 제거
    });

    // 모달 영역 외부를 클릭하여 닫기
    $(".modal-wrap").click(function (e) {
        if ($(e.target).hasClass("modal-wrap")) { // 클릭이 모달 콘텐츠 외부인지 확인
            $(this).removeClass("active");
            $('.wrap').on("wheel", removeDefaultEvent);
        }

        var modal = $(this).closest(".modal-wrap");
        modal.removeClass("active");
        window.removeEventListener("wheel", removeDefaultEvent);
        window.removeEventListener("touchmove", removeDefaultEvent); // 모달 닫을 때 터치 이벤트 제거
    });

    // 모달 내부 클릭 시 닫기 방지
    $(".modal-content").click(function (e) {
        e.stopPropagation();
    });

    /**** ios 키보드 scroll resize (modal 에서만 생기는 현상) ****/
    $('.modal-wrap input').keydown(function (event) {
        if (event.key === "Enter") {
            $(this).blur();
        }
    });

    $('.modal-wrap input').bind('blur', function (e) {
        window.scrollTo(0, 1);
    });

    /**** 약관 전체 동의 체크박스 클릭 이벤트 ****/
    $("#chkAll").click(function () {
        // 약관 전체 동의 체크박스의 상태를 가져옴
        var isChecked = $(this).prop("checked");
        // 아래에 있는 모든 체크박스의 상태를 약관 전체 동의 체크박스와 동일하게 설정
        $(".check-group input[type='checkbox']").prop("checked", isChecked);
    });

    // 체크박스 전체동의
    $("#cheAll").on("click", function () {
        const isChecked = $(this).prop("checked");

        // 같은 .terms-group 안에 있는 .check-all 전체 체크/해제
        $(this).closest(".terms-group").find(".check-all").prop("checked", isChecked);
    });

    // 메뉴 열기
    $('.header-menu').on('click', function () {
        $('.nav-dim').fadeIn().addClass('show');
        $('body').addClass('scroll-lock'); // 스크롤 막기
    });

    // 메뉴 닫기
    $('.btn-menu-colse').on('click', function () {
        $('.nav-dim').hide().removeClass('show');
        $('body').removeClass('scroll-lock'); // 스크롤 허용
    });

    // 탭
    $('.tab-link').on('click', function () {
        var tabId = $(this).data('tab'); // 클릭된 탭의 data-tab 값

        // 버튼 active 클래스 처리
        $('.tab-link').removeClass('active');
        $(this).addClass('active');

        // 콘텐츠 show/hide 처리
        $('.tab-content').removeClass('active');
        $('#' + tabId).addClass('active');
    });

    // 게시판
    $('.board-header').on('click', function () {
        const $item = $(this).closest('.board-item');
        const $body = $item.find('.board-body');

        // 다른 열린 아코디언 닫기
        $('.board-item').not($item).find('.board-body').slideUp();

        // 현재 클릭한 아이템 토글
        $body.stop(true, true).slideToggle();
    });

    const mainServiceSwiper01 = new Swiper(".main-service-swiper-01", {
        slidesPerView: 1.2,
        spaceBetween: 12,
        slidesOffsetBefore: 24, // 시작 전 여백 축소
        slidesOffsetAfter: 24,
        speed: 5000, // 슬라이드 이동 속도
        autoplay: {
            delay: 2000, // 딜레이 없이 계속 움직이도록 설정
            disableOnInteraction: false
        },
    });
    const mainServiceSwiper02 = new Swiper(".main-service-swiper-02", {
        slidesPerView: 1.2,
        spaceBetween: 12,
        slidesOffsetBefore: 24, // 시작 전 여백 축소
        slidesOffsetAfter: 24,
        speed: 5000, // 슬라이드 이동 속도
        autoplay: {
            delay: 2000, // 딜레이 없이 계속 움직이도록 설정
            disableOnInteraction: false
        },
    });
    const mainServiceSwiper03 = new Swiper(".main-service-swiper-03", {
        slidesPerView: 1.2,
        spaceBetween: 12,
        slidesOffsetBefore: 24, // 시작 전 여백 축소
        slidesOffsetAfter: 24,
        speed: 5000, // 슬라이드 이동 속도
        autoplay: {
            delay: 2000, // 딜레이 없이 계속 움직이도록 설정
            disableOnInteraction: false
        },
    });
    const mainServiceSwiper04 = new Swiper(".main-service-swiper-04", {
        slidesPerView: 1.2,
        spaceBetween: 12,
        slidesOffsetBefore: 24, // 시작 전 여백 축소
        slidesOffsetAfter: 24,
        speed: 5000, // 슬라이드 이동 속도
        autoplay: {
            delay: 2000, // 딜레이 없이 계속 움직이도록 설정
            disableOnInteraction: false
        },
    });
});
