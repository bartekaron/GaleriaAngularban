import {
  ExclamationTriangleIcon,
  InfoCircleIcon,
  TimesCircleIcon
} from "./chunk-R5T5WC4B.js";
import {
  CheckIcon
} from "./chunk-QDEZX37Z.js";
import {
  TimesIcon
} from "./chunk-WGTYFU2X.js";
import {
  animate,
  animateChild,
  query,
  state,
  style,
  transition,
  trigger
} from "./chunk-HC4DWC57.js";
import {
  Ripple,
  RippleModule
} from "./chunk-2FVMFA3B.js";
import "./chunk-MZS2KW3T.js";
import {
  MessageService,
  ObjectUtils,
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule,
  UniqueComponentId,
  zindexutils
} from "./chunk-KABLYPIT.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-QQ26ND4N.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Inject,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  ViewChild,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-FAMMGI2N.js";
import "./chunk-CMPTF2F3.js";
import "./chunk-LH2UFJUH.js";

// node_modules/primeng/fesm2022/primeng-toast.mjs
var _c0 = ["container"];
var _c1 = (a0) => [a0, "p-toast-message"];
var _c2 = (a0, a1, a2, a3) => ({
  showTransformParams: a0,
  hideTransformParams: a1,
  showTransitionParams: a2,
  hideTransitionParams: a3
});
var _c3 = (a0) => ({
  value: "visible",
  params: a0
});
var _c4 = (a0) => ({
  $implicit: a0
});
function ToastItem_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap("p-toast-message-icon pi " + ctx_r1.message.icon);
  }
}
function ToastItem_ng_container_3_span_2_CheckIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "CheckIcon");
  }
  if (rf & 2) {
    ɵɵattribute("aria-hidden", true)("data-pc-section", "icon");
  }
}
function ToastItem_ng_container_3_span_2_InfoCircleIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "InfoCircleIcon");
  }
  if (rf & 2) {
    ɵɵattribute("aria-hidden", true)("data-pc-section", "icon");
  }
}
function ToastItem_ng_container_3_span_2_TimesCircleIcon_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "TimesCircleIcon");
  }
  if (rf & 2) {
    ɵɵattribute("aria-hidden", true)("data-pc-section", "icon");
  }
}
function ToastItem_ng_container_3_span_2_ExclamationTriangleIcon_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ExclamationTriangleIcon");
  }
  if (rf & 2) {
    ɵɵattribute("aria-hidden", true)("data-pc-section", "icon");
  }
}
function ToastItem_ng_container_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 11);
    ɵɵelementContainerStart(1);
    ɵɵtemplate(2, ToastItem_ng_container_3_span_2_CheckIcon_2_Template, 1, 2, "CheckIcon", 3)(3, ToastItem_ng_container_3_span_2_InfoCircleIcon_3_Template, 1, 2, "InfoCircleIcon", 3)(4, ToastItem_ng_container_3_span_2_TimesCircleIcon_4_Template, 1, 2, "TimesCircleIcon", 3)(5, ToastItem_ng_container_3_span_2_ExclamationTriangleIcon_5_Template, 1, 2, "ExclamationTriangleIcon", 3);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("aria-hidden", true)("data-pc-section", "icon");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.message.severity === "success");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.message.severity === "info");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.message.severity === "error");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.message.severity === "warn");
  }
}
function ToastItem_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ToastItem_ng_container_3_span_1_Template, 1, 2, "span", 6)(2, ToastItem_ng_container_3_span_2_Template, 6, 6, "span", 7);
    ɵɵelementStart(3, "div", 8)(4, "div", 9);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 10);
    ɵɵtext(7);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.message.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.message.icon);
    ɵɵadvance();
    ɵɵattribute("data-pc-section", "text");
    ɵɵadvance();
    ɵɵattribute("data-pc-section", "summary");
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.message.summary);
    ɵɵadvance();
    ɵɵattribute("data-pc-section", "detail");
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.message.detail);
  }
}
function ToastItem_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ToastItem_button_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap("pt-1 text-base p-toast-message-icon pi " + ctx_r1.message.closeIcon);
  }
}
function ToastItem_button_5_TimesIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "TimesIcon", 14);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-toast-icon-close-icon");
    ɵɵattribute("aria-hidden", true)("data-pc-section", "closeicon");
  }
}
function ToastItem_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 12);
    ɵɵlistener("click", function ToastItem_button_5_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onCloseIconClick($event));
    })("keydown.enter", function ToastItem_button_5_Template_button_keydown_enter_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onCloseIconClick($event));
    });
    ɵɵtemplate(1, ToastItem_button_5_span_1_Template, 1, 2, "span", 6)(2, ToastItem_button_5_TimesIcon_2_Template, 1, 3, "TimesIcon", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵattribute("aria-label", ctx_r1.closeAriaLabel)("data-pc-section", "closebutton");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.message.closeIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.message.closeIcon);
  }
}
function Toast_p_toastItem_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-toastItem", 3);
    ɵɵlistener("onClose", function Toast_p_toastItem_2_Template_p_toastItem_onClose_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onMessageClose($event));
    })("@toastAnimation.start", function Toast_p_toastItem_2_Template_p_toastItem_animation_toastAnimation_start_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onAnimationStart($event));
    })("@toastAnimation.done", function Toast_p_toastItem_2_Template_p_toastItem_animation_toastAnimation_done_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onAnimationEnd($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const msg_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("message", msg_r3)("index", i_r4)("life", ctx_r1.life)("template", ctx_r1.template)("@toastAnimation", void 0)("showTransformOptions", ctx_r1.showTransformOptions)("hideTransformOptions", ctx_r1.hideTransformOptions)("showTransitionOptions", ctx_r1.showTransitionOptions)("hideTransitionOptions", ctx_r1.hideTransitionOptions);
  }
}
var ToastItem = class _ToastItem {
  zone;
  config;
  message;
  index;
  life;
  template;
  showTransformOptions;
  hideTransformOptions;
  showTransitionOptions;
  hideTransitionOptions;
  onClose = new EventEmitter();
  containerViewChild;
  timeout;
  constructor(zone, config) {
    this.zone = zone;
    this.config = config;
  }
  ngAfterViewInit() {
    this.initTimeout();
  }
  initTimeout() {
    if (!this.message?.sticky) {
      this.zone.runOutsideAngular(() => {
        this.timeout = setTimeout(() => {
          this.onClose.emit({
            index: this.index,
            message: this.message
          });
        }, this.message?.life || this.life || 3e3);
      });
    }
  }
  clearTimeout() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  }
  onMouseEnter() {
    this.clearTimeout();
  }
  onMouseLeave() {
    this.initTimeout();
  }
  onCloseIconClick(event) {
    this.clearTimeout();
    this.onClose.emit({
      index: this.index,
      message: this.message
    });
    event.preventDefault();
  }
  get closeAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.close : void 0;
  }
  ngOnDestroy() {
    this.clearTimeout();
  }
  static ɵfac = function ToastItem_Factory(t) {
    return new (t || _ToastItem)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PrimeNGConfig));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ToastItem,
    selectors: [["p-toastItem"]],
    viewQuery: function ToastItem_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      message: "message",
      index: "index",
      life: "life",
      template: "template",
      showTransformOptions: "showTransformOptions",
      hideTransformOptions: "hideTransformOptions",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions"
    },
    outputs: {
      onClose: "onClose"
    },
    decls: 6,
    vars: 24,
    consts: [["container", ""], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true", 3, "mouseenter", "mouseleave", "ngClass"], [1, "p-toast-message-content", 3, "ngClass"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "button", "class", "p-toast-icon-close p-link", "pRipple", "", 3, "click", "keydown.enter", 4, "ngIf"], [3, "class", 4, "ngIf"], ["class", "p-toast-message-icon", 4, "ngIf"], [1, "p-toast-message-text"], [1, "p-toast-summary"], [1, "p-toast-detail"], [1, "p-toast-message-icon"], ["type", "button", "pRipple", "", 1, "p-toast-icon-close", "p-link", 3, "click", "keydown.enter"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"]],
    template: function ToastItem_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 1, 0);
        ɵɵlistener("mouseenter", function ToastItem_Template_div_mouseenter_0_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onMouseEnter());
        })("mouseleave", function ToastItem_Template_div_mouseleave_0_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onMouseLeave());
        });
        ɵɵelementStart(2, "div", 2);
        ɵɵtemplate(3, ToastItem_ng_container_3_Template, 8, 7, "ng-container", 3)(4, ToastItem_ng_container_4_Template, 1, 0, "ng-container", 4)(5, ToastItem_button_5_Template, 3, 4, "button", 5);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.message == null ? null : ctx.message.styleClass);
        ɵɵproperty("ngClass", ɵɵpureFunction1(13, _c1, "p-toast-message-" + (ctx.message == null ? null : ctx.message.severity)))("@messageState", ɵɵpureFunction1(20, _c3, ɵɵpureFunction4(15, _c2, ctx.showTransformOptions, ctx.hideTransformOptions, ctx.showTransitionOptions, ctx.hideTransitionOptions)));
        ɵɵattribute("id", ctx.message == null ? null : ctx.message.id)("data-pc-name", "toast")("data-pc-section", "root");
        ɵɵadvance(2);
        ɵɵproperty("ngClass", ctx.message == null ? null : ctx.message.contentStyleClass);
        ɵɵattribute("data-pc-section", "content");
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.template);
        ɵɵadvance();
        ɵɵproperty("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", ɵɵpureFunction1(22, _c4, ctx.message));
        ɵɵadvance();
        ɵɵproperty("ngIf", (ctx.message == null ? null : ctx.message.closable) !== false);
      }
    },
    dependencies: () => [NgClass, NgIf, NgTemplateOutlet, Ripple, CheckIcon, InfoCircleIcon, TimesCircleIcon, ExclamationTriangleIcon, TimesIcon],
    encapsulation: 2,
    data: {
      animation: [trigger("messageState", [state("visible", style({
        transform: "translateY(0)",
        opacity: 1
      })), transition("void => *", [style({
        transform: "{{showTransformParams}}",
        opacity: 0
      }), animate("{{showTransitionParams}}")]), transition("* => void", [animate("{{hideTransitionParams}}", style({
        height: 0,
        opacity: 0,
        transform: "{{hideTransformParams}}"
      }))])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastItem, [{
    type: Component,
    args: [{
      selector: "p-toastItem",
      template: `
        <div
            #container
            [attr.id]="message?.id"
            [class]="message?.styleClass"
            [ngClass]="['p-toast-message-' + message?.severity, 'p-toast-message']"
            [@messageState]="{ value: 'visible', params: { showTransformParams: showTransformOptions, hideTransformParams: hideTransformOptions, showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions } }"
            (mouseenter)="onMouseEnter()"
            (mouseleave)="onMouseLeave()"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            [attr.data-pc-name]="'toast'"
            [attr.data-pc-section]="'root'"
        >
            <div class="p-toast-message-content" [ngClass]="message?.contentStyleClass" [attr.data-pc-section]="'content'">
                <ng-container *ngIf="!template">
                    <span *ngIf="message.icon" [class]="'p-toast-message-icon pi ' + message.icon"></span>
                    <span class="p-toast-message-icon" *ngIf="!message.icon" [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'">
                        <ng-container>
                            <CheckIcon *ngIf="message.severity === 'success'" [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                            <InfoCircleIcon *ngIf="message.severity === 'info'" [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                            <TimesCircleIcon *ngIf="message.severity === 'error'" [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                            <ExclamationTriangleIcon *ngIf="message.severity === 'warn'" [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                        </ng-container>
                    </span>
                    <div class="p-toast-message-text" [attr.data-pc-section]="'text'">
                        <div class="p-toast-summary" [attr.data-pc-section]="'summary'">{{ message.summary }}</div>
                        <div class="p-toast-detail" [attr.data-pc-section]="'detail'">{{ message.detail }}</div>
                    </div>
                </ng-container>
                <ng-container *ngTemplateOutlet="template; context: { $implicit: message }"></ng-container>
                <button
                    type="button"
                    class="p-toast-icon-close p-link"
                    (click)="onCloseIconClick($event)"
                    (keydown.enter)="onCloseIconClick($event)"
                    *ngIf="message?.closable !== false"
                    pRipple
                    [attr.aria-label]="closeAriaLabel"
                    [attr.data-pc-section]="'closebutton'"
                >
                    <span *ngIf="message.closeIcon" [class]="'pt-1 text-base p-toast-message-icon pi ' + message.closeIcon"></span>
                    <TimesIcon *ngIf="!message.closeIcon" [styleClass]="'p-toast-icon-close-icon'" [attr.aria-hidden]="true" [attr.data-pc-section]="'closeicon'" />
                </button>
            </div>
        </div>
    `,
      animations: [trigger("messageState", [state("visible", style({
        transform: "translateY(0)",
        opacity: 1
      })), transition("void => *", [style({
        transform: "{{showTransformParams}}",
        opacity: 0
      }), animate("{{showTransitionParams}}")]), transition("* => void", [animate("{{hideTransitionParams}}", style({
        height: 0,
        opacity: 0,
        transform: "{{hideTransformParams}}"
      }))])])],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: NgZone
  }, {
    type: PrimeNGConfig
  }], {
    message: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    life: [{
      type: Input
    }],
    template: [{
      type: Input
    }],
    showTransformOptions: [{
      type: Input
    }],
    hideTransformOptions: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    onClose: [{
      type: Output
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }]
  });
})();
var Toast = class _Toast {
  document;
  renderer;
  messageService;
  cd;
  config;
  /**
   * Key of the message in case message is targeted to a specific toast component.
   * @group Props
   */
  key;
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * The default time to display messages for in milliseconds.
   * @group Props
   */
  life = 3e3;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Inline class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Position of the toast in viewport.
   * @group Props
   */
  get position() {
    return this._position;
  }
  set position(value) {
    this._position = value;
    this.cd.markForCheck();
  }
  /**
   * It does not add the new message if there is already a toast displayed with the same content
   * @group Props
   */
  preventOpenDuplicates = false;
  /**
   * Displays only once a message with the same content.
   * @group Props
   */
  preventDuplicates = false;
  /**
   * Transform options of the show animation.
   * @group Props
   */
  showTransformOptions = "translateY(100%)";
  /**
   * Transform options of the hide animation.
   * @group Props
   */
  hideTransformOptions = "translateY(-100%)";
  /**
   * Transition options of the show animation.
   * @group Props
   */
  showTransitionOptions = "300ms ease-out";
  /**
   * Transition options of the hide animation.
   * @group Props
   */
  hideTransitionOptions = "250ms ease-in";
  /**
   * Object literal to define styles per screen size.
   * @group Props
   */
  breakpoints;
  /**
   * Callback to invoke when a message is closed.
   * @param {ToastCloseEvent} event - custom close event.
   * @group Emits
   */
  onClose = new EventEmitter();
  containerViewChild;
  templates;
  messageSubscription;
  clearSubscription;
  messages;
  messagesArchieve;
  template;
  _position = "top-right";
  constructor(document, renderer, messageService, cd, config) {
    this.document = document;
    this.renderer = renderer;
    this.messageService = messageService;
    this.cd = cd;
    this.config = config;
  }
  styleElement;
  id = UniqueComponentId();
  ngOnInit() {
    this.messageSubscription = this.messageService.messageObserver.subscribe((messages) => {
      if (messages) {
        if (Array.isArray(messages)) {
          const filteredMessages = messages.filter((m) => this.canAdd(m));
          this.add(filteredMessages);
        } else if (this.canAdd(messages)) {
          this.add([messages]);
        }
      }
    });
    this.clearSubscription = this.messageService.clearObserver.subscribe((key) => {
      if (key) {
        if (this.key === key) {
          this.messages = null;
        }
      } else {
        this.messages = null;
      }
      this.cd.markForCheck();
    });
  }
  ngAfterViewInit() {
    if (this.breakpoints) {
      this.createStyle();
    }
  }
  add(messages) {
    this.messages = this.messages ? [...this.messages, ...messages] : [...messages];
    if (this.preventDuplicates) {
      this.messagesArchieve = this.messagesArchieve ? [...this.messagesArchieve, ...messages] : [...messages];
    }
    this.cd.markForCheck();
  }
  canAdd(message) {
    let allow = this.key === message.key;
    if (allow && this.preventOpenDuplicates) {
      allow = !this.containsMessage(this.messages, message);
    }
    if (allow && this.preventDuplicates) {
      allow = !this.containsMessage(this.messagesArchieve, message);
    }
    return allow;
  }
  containsMessage(collection, message) {
    if (!collection) {
      return false;
    }
    return collection.find((m) => {
      return m.summary === message.summary && m.detail == message.detail && m.severity === message.severity;
    }) != null;
  }
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "message":
          this.template = item.template;
          break;
        default:
          this.template = item.template;
          break;
      }
    });
  }
  onMessageClose(event) {
    this.messages?.splice(event.index, 1);
    this.onClose.emit({
      message: event.message
    });
    this.cd.detectChanges();
  }
  onAnimationStart(event) {
    if (event.fromState === "void") {
      this.renderer.setAttribute(this.containerViewChild?.nativeElement, this.id, "");
      if (this.autoZIndex && this.containerViewChild?.nativeElement.style.zIndex === "") {
        zindexutils.set("modal", this.containerViewChild?.nativeElement, this.baseZIndex || this.config.zIndex.modal);
      }
    }
  }
  onAnimationEnd(event) {
    if (event.toState === "void") {
      if (this.autoZIndex && ObjectUtils.isEmpty(this.messages)) {
        zindexutils.clear(this.containerViewChild?.nativeElement);
      }
    }
  }
  createStyle() {
    if (!this.styleElement) {
      this.styleElement = this.renderer.createElement("style");
      this.styleElement.type = "text/css";
      this.renderer.appendChild(this.document.head, this.styleElement);
      let innerHTML = "";
      for (let breakpoint in this.breakpoints) {
        let breakpointStyle = "";
        for (let styleProp in this.breakpoints[breakpoint]) {
          breakpointStyle += styleProp + ":" + this.breakpoints[breakpoint][styleProp] + " !important;";
        }
        innerHTML += `
                    @media screen and (max-width: ${breakpoint}) {
                        .p-toast[${this.id}] {
                           ${breakpointStyle}
                        }
                    }
                `;
      }
      this.renderer.setProperty(this.styleElement, "innerHTML", innerHTML);
    }
  }
  destroyStyle() {
    if (this.styleElement) {
      this.renderer.removeChild(this.document.head, this.styleElement);
      this.styleElement = null;
    }
  }
  ngOnDestroy() {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
    if (this.containerViewChild && this.autoZIndex) {
      zindexutils.clear(this.containerViewChild.nativeElement);
    }
    if (this.clearSubscription) {
      this.clearSubscription.unsubscribe();
    }
    this.destroyStyle();
  }
  static ɵfac = function Toast_Factory(t) {
    return new (t || _Toast)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(MessageService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PrimeNGConfig));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Toast,
    selectors: [["p-toast"]],
    contentQueries: function Toast_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Toast_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      key: "key",
      autoZIndex: "autoZIndex",
      baseZIndex: "baseZIndex",
      life: "life",
      style: "style",
      styleClass: "styleClass",
      position: "position",
      preventOpenDuplicates: "preventOpenDuplicates",
      preventDuplicates: "preventDuplicates",
      showTransformOptions: "showTransformOptions",
      hideTransformOptions: "hideTransformOptions",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      breakpoints: "breakpoints"
    },
    outputs: {
      onClose: "onClose"
    },
    decls: 3,
    vars: 5,
    consts: [["container", ""], [1, "p-toast", "p-component", 3, "ngClass", "ngStyle"], [3, "message", "index", "life", "template", "showTransformOptions", "hideTransformOptions", "showTransitionOptions", "hideTransitionOptions", "onClose", 4, "ngFor", "ngForOf"], [3, "onClose", "message", "index", "life", "template", "showTransformOptions", "hideTransformOptions", "showTransitionOptions", "hideTransitionOptions"]],
    template: function Toast_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 1, 0);
        ɵɵtemplate(2, Toast_p_toastItem_2_Template, 1, 9, "p-toastItem", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngClass", "p-toast-" + ctx._position)("ngStyle", ctx.style);
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.messages);
      }
    },
    dependencies: [NgClass, NgForOf, NgStyle, ToastItem],
    styles: ["@layer primeng{.p-toast{position:fixed;width:25rem}.p-toast-message{overflow:hidden}.p-toast-message-content{display:flex;align-items:flex-start}.p-toast-message-text{flex:1 1 auto}.p-toast-top-right{top:20px;right:20px}.p-toast-top-left{top:20px;left:20px}.p-toast-bottom-left{bottom:20px;left:20px}.p-toast-bottom-right{bottom:20px;right:20px}.p-toast-top-center{top:20px;left:50%;transform:translate(-50%)}.p-toast-bottom-center{bottom:20px;left:50%;transform:translate(-50%)}.p-toast-center{left:50%;top:50%;min-width:20vw;transform:translate(-50%,-50%)}.p-toast-icon-close{display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative;flex:none}.p-toast-icon-close.p-link{cursor:pointer}}\n"],
    encapsulation: 2,
    data: {
      animation: [trigger("toastAnimation", [transition(":enter, :leave", [query("@*", animateChild())])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Toast, [{
    type: Component,
    args: [{
      selector: "p-toast",
      template: `
        <div #container class="p-toast p-component" [ngClass]="'p-toast-' + _position" [ngStyle]="style" [class]="styleClass">
            <p-toastItem
                *ngFor="let msg of messages; let i = index"
                [message]="msg"
                [index]="i"
                [life]="life"
                (onClose)="onMessageClose($event)"
                [template]="template"
                @toastAnimation
                (@toastAnimation.start)="onAnimationStart($event)"
                (@toastAnimation.done)="onAnimationEnd($event)"
                [showTransformOptions]="showTransformOptions"
                [hideTransformOptions]="hideTransformOptions"
                [showTransitionOptions]="showTransitionOptions"
                [hideTransitionOptions]="hideTransitionOptions"
            ></p-toastItem>
        </div>
    `,
      animations: [trigger("toastAnimation", [transition(":enter, :leave", [query("@*", animateChild())])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-toast{position:fixed;width:25rem}.p-toast-message{overflow:hidden}.p-toast-message-content{display:flex;align-items:flex-start}.p-toast-message-text{flex:1 1 auto}.p-toast-top-right{top:20px;right:20px}.p-toast-top-left{top:20px;left:20px}.p-toast-bottom-left{bottom:20px;left:20px}.p-toast-bottom-right{bottom:20px;right:20px}.p-toast-top-center{top:20px;left:50%;transform:translate(-50%)}.p-toast-bottom-center{bottom:20px;left:50%;transform:translate(-50%)}.p-toast-center{left:50%;top:50%;min-width:20vw;transform:translate(-50%,-50%)}.p-toast-icon-close{display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative;flex:none}.p-toast-icon-close.p-link{cursor:pointer}}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Renderer2
  }, {
    type: MessageService
  }, {
    type: ChangeDetectorRef
  }, {
    type: PrimeNGConfig
  }], {
    key: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input
    }],
    baseZIndex: [{
      type: Input
    }],
    life: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    preventOpenDuplicates: [{
      type: Input
    }],
    preventDuplicates: [{
      type: Input
    }],
    showTransformOptions: [{
      type: Input
    }],
    hideTransformOptions: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    breakpoints: [{
      type: Input
    }],
    onClose: [{
      type: Output
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ToastModule = class _ToastModule {
  static ɵfac = function ToastModule_Factory(t) {
    return new (t || _ToastModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ToastModule,
    declarations: [Toast, ToastItem],
    imports: [CommonModule, RippleModule, CheckIcon, InfoCircleIcon, TimesCircleIcon, ExclamationTriangleIcon, TimesIcon],
    exports: [Toast, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, RippleModule, CheckIcon, InfoCircleIcon, TimesCircleIcon, ExclamationTriangleIcon, TimesIcon, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RippleModule, CheckIcon, InfoCircleIcon, TimesCircleIcon, ExclamationTriangleIcon, TimesIcon],
      exports: [Toast, SharedModule],
      declarations: [Toast, ToastItem]
    }]
  }], null, null);
})();
export {
  Toast,
  ToastItem,
  ToastModule
};
//# sourceMappingURL=primeng_toast.js.map
