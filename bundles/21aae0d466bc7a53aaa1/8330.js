"use strict";(self.webpackChunkelement_web=self.webpackChunkelement_web||[]).push([[8330],{"./src/components/views/rooms/CollapsibleButton.tsx":(e,t,s)=>{s.d(t,{J:()=>d});var o=s("./node_modules/@babel/runtime/helpers/esm/extends.js"),n=s("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=s("./node_modules/react/index.js"),i=s("./node_modules/classnames/index.js"),a=s.n(i),l=s("./src/components/views/elements/AccessibleButton.tsx"),c=s("./src/components/views/rooms/MessageComposerButtons.tsx"),m=s("./src/components/views/context_menus/IconizedContextMenu.tsx");const u=["title","children","className","iconClassName","inputRef"],d=e=>{let{title:t,children:s,className:i,iconClassName:d,inputRef:p}=e,_=(0,n.A)(e,u);return!!(0,r.useContext)(c.ZF)?r.createElement(m.R$,(0,o.A)({},_,{iconClassName:d,label:t,inputRef:p})):r.createElement(l.A,(0,o.A)({},_,{title:t,className:a()(i,d),ref:p}),s)}},"./src/components/views/rooms/EmojiButton.tsx":(e,t,s)=>{s.d(t,{h:()=>d});var o=s("./node_modules/@babel/runtime/helpers/esm/extends.js"),n=s("./node_modules/classnames/index.js"),r=s.n(n),i=s("./node_modules/react/index.js"),a=s("./src/languageHandler.tsx"),l=s("./src/components/structures/ContextMenu.tsx"),c=s("./src/components/views/emojipicker/EmojiPicker.tsx"),m=s("./src/components/views/rooms/CollapsibleButton.tsx"),u=s("./src/components/views/rooms/MessageComposerButtons.tsx");function d({addEmoji:e,menuPosition:t,className:s}){const n=(0,i.useContext)(u.ZF),[d,p,_,x]=(0,l.EF)();let h=null;if(d&&p.current){const s=null!=t?t:(0,l.qv)(p.current.getBoundingClientRect()),r=()=>{x(),null==n||n()};h=i.createElement(l.Ay,(0,o.A)({},s,{onFinished:r,managed:!1}),i.createElement(c.Ay,{onChoose:e,onFinished:r}))}const C=r()("mx_EmojiButton",s,{mx_EmojiButton_highlight:d});return i.createElement(i.Fragment,null,i.createElement(m.J,{className:C,iconClassName:"mx_EmojiButton_icon",onClick:_,title:(0,a._t)("common|emoji"),inputRef:p}),h)}},"./src/components/views/rooms/MessageComposerButtons.tsx":(e,t,s)=>{s.d(t,{Ay:()=>J,ZF:()=>A});var o=s("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),n=s("./node_modules/@babel/runtime/helpers/esm/extends.js"),r=s("./node_modules/classnames/index.js"),i=s.n(r),a=s("./node_modules/matrix-js-sdk/src/matrix.ts"),l=s("./node_modules/react/index.js"),c=s("./src/languageHandler.tsx"),m=s("./src/components/views/rooms/CollapsibleButton.tsx"),u=s("./src/dispatcher/dispatcher.ts"),d=s("./src/components/views/dialogs/ErrorDialog.tsx"),p=s("./src/components/views/location/index.tsx"),_=s("./src/Modal.tsx"),x=s("./src/components/views/elements/PollCreateDialog.tsx"),h=s("./src/MatrixClientPeg.ts"),C=s("./src/ContentMessages.ts"),g=s("./src/contexts/MatrixClientContext.tsx"),v=s("./src/contexts/RoomContext.ts"),E=s("./src/hooks/useDispatcher.ts"),y=s("./src/utils/BrowserWorkarounds.ts"),f=s("./src/components/views/context_menus/IconizedContextMenu.tsx"),k=s("./src/components/views/rooms/EmojiButton.tsx"),w=s("./src/utils/arrays.ts"),M=s("./src/hooks/useSettings.ts"),b=s("./src/components/views/elements/AccessibleButton.tsx");const A=(0,l.createContext)(null);function N(e){return l.createElement(k.h,{key:"emoji_button",addEmoji:e.addEmoji,menuPosition:e.menuPosition,className:"mx_MessageComposer_button"})}function P(){return l.createElement(S,{key:"controls_upload"})}const U=(0,l.createContext)(null),B=({roomId:e,relation:t,children:s})=>{const o=(0,l.useContext)(g.Ay),n=(0,l.useContext)(v.Ay),r=(0,l.useRef)(null),i=()=>{var e;null!=o&&o.isGuest()?u.A.dispatch({action:"require_registration"}):null===(e=r.current)||void 0===e||e.click()};(0,E.F)(u.A,(e=>{n.timelineRenderingType===e.context&&"upload_file"===e.action&&i()}));return l.createElement(U.Provider,{value:i},s,l.createElement("input",{ref:r,type:"file",style:{display:"none"},multiple:!0,onClick:y.e,onChange:s=>{var r;0!==(null===(r=s.target.files)||void 0===r?void 0:r.length)&&(C.Ay.sharedInstance().sendContentListToRoom(Array.from(s.target.files),e,t,o,n.timelineRenderingType),s.target.value="")}}))},S=()=>{const e=(0,l.useContext)(A),t=(0,l.useContext)(U);return l.createElement(m.J,{className:"mx_MessageComposer_button",iconClassName:"mx_MessageComposer_upload",onClick:()=>{null==t||t(),null==e||e()},title:(0,c._t)("common|attachment")})};function j(e){return e.showStickersButton?l.createElement(m.J,{id:"stickersButton",key:"controls_stickers",className:"mx_MessageComposer_button",iconClassName:"mx_MessageComposer_stickers",onClick:()=>e.setStickerPickerOpen(!e.isStickerPickerOpen),title:e.isStickerPickerOpen?(0,c._t)("composer|close_sticker_picker"):(0,c._t)("common|sticker")}):null}const R=e=>e.showVoiceBroadcastButton?l.createElement(m.J,{key:"start_voice_broadcast",className:"mx_MessageComposer_button",iconClassName:"mx_MessageComposer_voiceBroadcast",onClick:e.onStartVoiceBroadcastClick,title:(0,c._t)("voice_broadcast|action")}):null;function I(e,t){return t?null:l.createElement(m.J,{key:"voice_message_send",className:"mx_MessageComposer_button",iconClassName:"mx_MessageComposer_voiceMessage",onClick:e.onRecordStartEndClick,title:(0,c._t)("composer|voice_message_button")})}function T(e,t){return l.createElement(D,{key:"polls",room:e,relation:t})}class D extends l.PureComponent{constructor(...e){super(...e),(0,o.A)(this,"onCreateClick",(()=>{var e;null===(e=this.context)||void 0===e||e.call(this);if(this.props.room.currentState.maySendEvent(a.M_POLL_START.name,h.J.safeGet().getSafeUserId())){var t;const e=(null===(t=this.props.relation)||void 0===t?void 0:t.rel_type)===a.THREAD_RELATION_TYPE.name?this.props.relation.event_id:void 0;_.Ay.createDialog(x.A,{room:this.props.room,threadId:e},"mx_CompoundDialog",!1,!0)}else _.Ay.createDialog(d.A,{title:(0,c._t)("composer|poll_button_no_perms_title"),description:(0,c._t)("composer|poll_button_no_perms_description")})}))}render(){var e;return(null===(e=this.props.relation)||void 0===e?void 0:e.rel_type)===a.THREAD_RELATION_TYPE.name?null:l.createElement(m.J,{className:"mx_MessageComposer_button",iconClassName:"mx_MessageComposer_poll",onClick:this.onCreateClick,title:(0,c._t)("composer|poll_button")})}}function F(e,t,s){const o=t.getMember(s.getSafeUserId());return e.showLocationButton&&o?l.createElement(p.Uo,{key:"location",roomId:t.roomId,relation:e.relation,sender:o,menuPosition:e.menuPosition}):null}function O({isRichTextEnabled:e,onClick:t}){const s=e?(0,c._t)("composer|mode_plain"):(0,c._t)("composer|mode_rich_text");return l.createElement(m.J,{className:"mx_MessageComposer_button",iconClassName:i()({mx_MessageComposer_plain_text:!e,mx_MessageComposer_rich_text:e}),onClick:t,title:s})}(0,o.A)(D,"contextType",A);const J=e=>{const t=(0,l.useContext)(g.Ay),{room:s,narrow:o}=(0,l.useContext)(v.Ay),r=(0,M.ti)("feature_wysiwyg_composer");if(!t||!s||e.haveRecording)return null;let a,m;o?(a=[r?l.createElement(O,{key:"composerModeButton",isRichTextEnabled:e.isRichTextEnabled,onClick:e.onComposerModeClick}):N(e)],m=[P(),j(e),I(e,o),R(e),e.showPollsButton?T(s,e.relation):null,F(e,s,t)]):(a=[r?l.createElement(O,{key:"composerModeButton",isRichTextEnabled:e.isRichTextEnabled,onClick:e.onComposerModeClick}):N(e),P()],m=[j(e),I(e,o),R(e),e.showPollsButton?T(s,e.relation):null,F(e,s,t)]),a=(0,w.Bo)(a),m=(0,w.Bo)(m);const u=i()({mx_MessageComposer_button:!0,mx_MessageComposer_buttonMenu:!0,mx_MessageComposer_closeButtonMenu:e.isMenuOpen});return l.createElement(B,{roomId:s.roomId,relation:e.relation},a,m.length>0&&l.createElement(b.A,{className:u,onClick:e.toggleButtonMenu,title:(0,c._t)("quick_settings|sidebar_settings")}),e.isMenuOpen&&l.createElement(f.Ay,(0,n.A)({onFinished:e.toggleButtonMenu},e.menuPosition,{wrapperClassName:"mx_MessageComposer_Menu",compact:!0}),l.createElement(A.Provider,{value:e.toggleButtonMenu},l.createElement(f.tx,null,m))))}},"./src/stores/OwnProfileStore.ts":(e,t,s)=>{s.d(t,{V:()=>_});var o,n=s("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),r=s("./node_modules/matrix-js-sdk/src/matrix.ts"),i=s("./node_modules/lodash/lodash.js"),a=s("./src/stores/AsyncStoreWithClient.ts"),l=s("./src/dispatcher/dispatcher.ts"),c=s("./src/MatrixClientPeg.ts"),m=s("./src/languageHandler.tsx"),u=s("./src/customisations/Media.ts");const d="mx_profile_displayname",p="mx_profile_avatar_url";class _ extends a.r{constructor(){super(l.A,{displayName:window.localStorage.getItem(d)||void 0,avatarUrl:window.localStorage.getItem(p)||void 0}),(0,n.A)(this,"monitoredUser",null),(0,n.A)(this,"onProfileUpdate",(0,i.throttle)((async()=>{if(!this.matrixClient)return;let e={displayname:void 0,avatar_url:void 0};try{e=await this.matrixClient.getProfileInfo(this.matrixClient.getSafeUserId())}catch(e){if(!(e instanceof r.MatrixError)||"M_NOT_FOUND"!==e.errcode)throw e}e.displayname?window.localStorage.setItem(d,e.displayname):window.localStorage.removeItem(d),e.avatar_url?window.localStorage.setItem(p,e.avatar_url):window.localStorage.removeItem(p),await this.updateState({displayName:e.displayname,avatarUrl:e.avatar_url,fetchedAt:Date.now()})}),200,{trailing:!0,leading:!0})),(0,n.A)(this,"onStateEvents",(async e=>{const t=c.J.safeGet().getUserId();e.getType()===r.EventType.RoomMember&&e.getSender()===t&&e.getStateKey()===t&&await this.onProfileUpdate()}))}static get instance(){return _.internalInstance}get displayName(){return this.matrixClient?this.matrixClient.isGuest()?(0,m._t)("common|guest"):this.state.displayName?this.state.displayName:this.matrixClient.getUserId():this.state.displayName||null}get isProfileInfoFetched(){return!!this.state.fetchedAt}get avatarMxc(){return this.state.avatarUrl||null}getHttpAvatarUrl(e=0){if(!this.avatarMxc)return null;const t=(0,u.lH)(this.avatarMxc);return!e||e<=0?t.srcHttp:t.getSquareThumbnailHttp(e)}async onNotReady(){var e;this.onProfileUpdate.cancel(),this.monitoredUser&&(this.monitoredUser.removeListener(r.UserEvent.DisplayName,this.onProfileUpdate),this.monitoredUser.removeListener(r.UserEvent.AvatarUrl,this.onProfileUpdate)),null===(e=this.matrixClient)||void 0===e||e.removeListener(r.RoomStateEvent.Events,this.onStateEvents),await this.reset({})}async onReady(){if(!this.matrixClient)return;const e=this.matrixClient.getSafeUserId();this.monitoredUser=this.matrixClient.getUser(e),this.monitoredUser&&(this.monitoredUser.on(r.UserEvent.DisplayName,this.onProfileUpdate),this.monitoredUser.on(r.UserEvent.AvatarUrl,this.onProfileUpdate)),this.matrixClient.on(r.RoomStateEvent.Events,this.onStateEvents),await this.onProfileUpdate()}async onAction(e){}}o=_,(0,n.A)(_,"internalInstance",(()=>{const e=new o;return e.start(),e})())}}]);
//# sourceMappingURL=8330.js.map