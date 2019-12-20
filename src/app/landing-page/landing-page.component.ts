import { Component, OnInit, HostListener, ViewChild, AfterViewInit, TemplateRef, ElementRef, ViewEncapsulation } from '@angular/core';
import { CATEGORY, LOCATION } from 'src/app/configs/constants/constants';
import { NgbModal, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
// import { UserService } from 'src/app/shared/services/user.service';
// import { LoaderServiceService } from 'src/app/shared/services/utilities/loader-service.service';
// import { DragScrollComponent, DragScrollItemDirective } from 'ngx-drag-scroll';
// import { ToastrService } from 'ngx-toastr';
import { NgAnimateScrollService } from 'ng-animate-scroll';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
// import { MatCarousel, SvgIconOverrides, MatCarouselComponent } from '@ngmodule/material-carousel';


declare var $: any;

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('collapseChange', [
      state('false',
        style({ height: '0', overflow: 'hidden' }),
      ),
      state('true',
        style({ height: '*' })
      ),
      transition('* => *', animate('.25s ease-in'))
    ]),
    trigger('iconChange', [
      state('true',
        style({ transform: 'rotate( -180deg )' })
      ),
      state('false',
        style({ transform: 'rotate( 0deg )' })
      ),
      transition('* => *', animate('.25s'))
    ])
  ]


})

export class LandingPageComponent implements OnInit {
  // @ViewChild('nav', { read: DragScrollComponent }) ds: DragScrollComponent;
  // @ViewChild('completedSignUp') modalContent: TemplateRef<any>;
  isScroll = false;
  isplay = false;
  isError = false;
  isLogin = false;
  bizName = '';
  businessType = '';
  employeeNumber = '';
  street = '';
  province = '';
  district = '';
  socailLink = '';
  lastName = '';
  // firstName = '';
  email = '';
  phone = '';
  src = '';
  errorMessage = '';
  categorys = CATEGORY;
  locations = LOCATION;
  numberEmployee = ['1', '2', '3', '4', '5', '6', '7+'];
  srcKnow = ['Khách hàng giới thiệu', 'Salon khác giới thiệu', 'Quảng cáo trên báo/ tạp chí', 'Facebook/ Instagram/ Google',
    'Các sự kiện về tóc và salon', 'Quảng cáo truyền hình', 'Khác'];
  isMobileResolution = false;
  districsts = [];
  user: any = {};
  showMenu = false;
  menuIcon = 'menu';
  showDialogLogin = false;
  discoverIsCollapsed: boolean = false;
  partnerIsCollapsed: boolean = false;
  companyIsCollapsed: boolean = false;
  feedbackList = [
    {
      userName: "Lê Lý",
      content: "Tôi có thể nhận lịch hẹn của khách mọi lúc, mọi nơi mà không cần phải ở tiệm suốt như hồi trước nữa. Nhờ nền tảng GlamStyle mà doanh thu hàng tháng của tiệm tăng rõ rệt. Việc quản lý kinh doanh cũng trở nên dễ dàng, hiệu quả hơn nhiều.",
      avatar: "assets/business/avatar1.png",
      barberName: "Lily Beauty Salon"
    },
    {
      userName: "Huỳnh Như",
      content: "Lúc trước, khách hàng của tôi thường hay phàn nàn về việc phải đợi rất lâu để được phục vụ. Nhờ tính năng đặt hẹn của GlamStyle, tôi đã giải quyết tốt vấn đề này, dễ thở hơn và mọi người cũng hài lòng, phản hồi tích cực hơn về dịch vụ của salon.",
      avatar: "assets/business/avatar2.png",
      barberName: "Hair Salon Như Huỳnh"

    },
    {
      userName: "Phước Nguyễn",
      content: "Trước đây, tôi mất nhiều thời gian để kết sổ sách, xem tình hình kinh doanh, và tính lương cho nhân viên mỗi tháng. Nhiều khi sổ sách bị thất lạc hay hư hỏng làm tôi rất đau đầu. Nhưng giờ tôi không phải lo nữa vì báo cáo đã được tích hợp hết trong điện thoại, khi nào cần là có ngay, rất tiện dụng và tiết kiệm thời gian!",
      avatar: "assets/business/avatar3.png",
      barberName: "PN Barber Shop"

    },
    {
      userName: "Hoài Thương",
      content: "Tuyệt! Quản lý thời gian tiện lợi, hỗ trợ khách hàng đặt lịch và nhận tiền nhanh chóng. Từ ngày dùng GlamStyle công việc của tôi dễ quản lý, hiệu quả và cải thiện tốt hơn rất nhiều.",
      avatar: "assets/business/avatar4.png",
      barberName: "Tiệm tóc Thương Hair"
    },
  ];
  deviceList = [
    'assets/business/device1.png',
    'assets/business/device2.png',
    'assets/business/device3.png'
  ]

  // arowsIcon: SvgIconOverrides = {
  //   arrowBack: 'arrow-back',
  //   arrowForward: 'arrow-forward'
  // }
  constructor(
    private modalService: NgbModal,
    // private userService: UserService,
    // private loaderService: LoaderServiceService,
    config: NgbRatingConfig,
    // private toastr: ToastrService,
    private animateScrollService: NgAnimateScrollService,
    private eRef: ElementRef,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    config.max = 5;
    config.readonly = true;
    iconRegistry.addSvgIcon(
      'arrow-back',
      sanitizer.bypassSecurityTrustResourceUrl('assets/business/left-arrow.svg'));
    iconRegistry.addSvgIcon(
      'arrow-forward',
      sanitizer.bypassSecurityTrustResourceUrl('assets/business/right-arrow.svg'));
  }

  ngOnInit() {
  }

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   const scrollIn = window.pageYOffset;
  //   if (scrollIn >= 200) {
  //     this.isScroll = true;
  //   } else if (this.isScroll && scrollIn < 200) {
  //     this.isScroll = false;
  //   }
  // }

  // @HostListener('document:click', ['$event']) clickout(event) {
  //   if (this.showMenu) {
  //     this.toggleMenu()
  //   }
  // }



  onClickedInside(event: MouseEvent): void {
    event.stopPropagation();
  }

  // private showLoader(): void {
  //   console.log('show loader');
  //   this.loaderService.show();
  // }

  // private hideLoader(): void {
  //   console.log('hide loader');
  //   this.loaderService.hide();
  // }

  toggleMenu() {
    this.showMenu = !this.showMenu;
    if (this.showMenu) {
      this.menuIcon = 'clear';
    }
    else {
      this.menuIcon = 'menu';
    }

  }
  fromSlideMenuToID(id) {
    this.toggleMenu();
    this.animateScrollService.scrollToElement(id, 1000);
  }

  gotoFeatureID(id) {
    this.animateScrollService.scrollToElement(id, 1000);
  }

  gotoSign() {
    this.animateScrollService.scrollToElement('sign-up-form', 1000);
  }

  play() {
    if (!this.isMobileResolution) {
      window.scrollTo(0, 6568);
    } else {
      window.scrollTo(0, 9028);
    }
    this.isplay = true;
  }
  signUp() {
    this.isError = false;
    if (this.bizName.length === 0) {
      this.isError = true;
      this.errorMessage = 'Bạn cần nhập tên doanh nghiệp';
    } else if (this.businessType.length === 0) {
      this.isError = true;
      this.errorMessage = 'Bạn cần chọn lĩnh vực kinh doanh';
    } else if (this.employeeNumber.length === 0) {
      this.isError = true;
      this.errorMessage = 'Bạn cần chọn số lượng nhân viên';
    } else if (this.street.length === 0) {
      this.isError = true;
      this.errorMessage = 'Bạn cần nhập địa chỉ của bạn';
    } else if (this.province.length === 0) {
      this.isError = true;
      this.errorMessage = 'Bạn cần chọn thành phố';
    } else if (this.district.length === 0) {
      this.isError = true;
      this.errorMessage = 'Bạn cần chọn quận/huyện';
    } else if (this.lastName.length === 0) {
      this.isError = true;
      this.errorMessage = 'Bạn cần nhập họ và tên';
    } else if (this.email.length === 0) {
      this.isError = true;
      this.errorMessage = 'Bạn cần nhập email';
    } else if (this.phone.length === 0) {
      this.isError = true;
      this.errorMessage = 'Bạn cần nhập số điện thoại';
    } else if (this.src.length === 0) {
      this.isError = true;
      this.errorMessage = 'Bạn cần chọn nguồn giới thiệu';
    }

    if (this.isError === false) {
      this.submitForm();
    }
  }

  loginCompleted(event) {
    this.showDialogLogin = false;
  }

  chooseService(serviceName) {
    this.businessType = serviceName;

  }

  chooseNumber(numberEmployee) {
    this.employeeNumber = numberEmployee;
  }

  chosseCity(city) {
    this.province = city;
    this.districsts = this.locations[0].county;
    // this.district = this.locations[0].county[0];
  }

  chooseDistrict(districst) {
    this.district = districst;
  }

  chooseSource(src) {
    this.src = src;
  }

  login() {
    this.modalService.dismissAll();
    window.open('http://host.glamstyle.vn');
  }

  moveToLink(link) {
    window.open(link);
  }


  openPopup(content) {
    this.modalService.dismissAll();
    this.modalService.open(content, { size: 'lg', backdrop: 'static', centered: true, windowClass: 'modal-xxl' });
  }

  // checkLogin() {
  //   this.userService.getCurrentUser()
  //     .subscribe(
  //       res => {
  //         // console.log(res);
  //         this.isLogin = true;
  //       },
  //       err => {
  //         console.log(err);
  //       }
  //     );
  // }
  submitForm() {
    // form is: https://docs.google.com/spreadsheets/d/19TEVpGoPhPnmzmTse0MsYvhic_5jqSTMAy_VWqzF0P8/edit#gid=0

    const form = new FormData();
    form.append('bizName', this.bizName);
    form.append('businessType', this.businessType);
    form.append('employeeNumber', this.employeeNumber);
    form.append('province', this.province);
    form.append('district', this.district);
    form.append('streetAddress', this.street);
    form.append('socailLink', this.socailLink);
    form.append('lastName', this.lastName);
    // form.append('firstName', this.firstName);
    form.append('email', this.email);
    form.append('phone', this.phone);
    form.append('src', this.src);
    console.log('jasonsssssss', form);
    const settings = {
      // tslint:disable-next-line:object-literal-key-quotes
      'async': true,
      // tslint:disable-next-line:object-literal-key-quotes
      'crossDomain': true,
      // tslint:disable-next-line:object-literal-key-quotes
      'url': 'https://script.google.com/macros/s/AKfycbzfEICDQEJjX3CopKlOSO4BAWUMq1TAkHT-qnnbviHYtyLoxQ/exec',
      // tslint:disable-next-line:object-literal-key-quotes
      'method': 'POST',
      // tslint:disable-next-line:object-literal-key-quotes
      'processData': false,
      // tslint:disable-next-line:object-literal-key-quotes
      'contentType': false,
      // tslint:disable-next-line:object-literal-key-quotes
      'mimeType': 'multipart/form-data',
      // tslint:disable-next-line:object-literal-key-quotes
      'data': form
    };

    // tslint:disable-next-line:only-arrow-functions
    // $.ajax(settings).done(function (response) {
    //   console.log(response);
    // });
    // this.hideLoader();
    // this.modalService.open(this.modalContent, { backdrop: 'static', centered: true });
  }

  fixDisappearIOSBug () {
    //  to fix the error: mat-menu disappears instanly after opening on IOS mobile
    const styleNode = document.createElement('style');
    styleNode.type = 'text/css';
    styleNode.id = 'panel-fix';
    styleNode.appendChild(document.createTextNode('.mat-menu-panel{overflow: initial !important;}'));
    document.getElementsByTagName('head')[0].appendChild(styleNode);
    setTimeout(() => {
      styleNode.remove();
    },1);
  }

}

export class DataToSend {
  name: string;
}


  // tslint:disable-next-line:quotemark

  // @HostListener('window:resize', ['$event'])
  // onResizeZ(event) {
  //   // console.log('on resize = ' +  event.target.innerWidth);
  //   if (event.target.innerWidth >= 992) {
  //     this.isMobileResolution = false;
  //   } else {
  //     this.isMobileResolution = true;
  //   }
  // }






