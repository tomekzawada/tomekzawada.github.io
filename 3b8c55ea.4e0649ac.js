(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{148:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(2),r=t(9),o=(t(0),t(172)),i={id:"installation",title:"Installation",sidebar_label:"Installation"},l={id:"installation",title:"Installation",description:"Reanimated 2 is primarily build in C++ using Turbo Modules infrastructure which is not yet completely deployed in React Native (specifically on Android).",source:"@site/docs/installation.md",permalink:"/docs/installation",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/installation.md",sidebar_label:"Installation",sidebar:"someSidebar",previous:{title:"About React Native Reanimated",permalink:"/docs/about"},next:{title:"Worklets",permalink:"/docs/worklets"}},c=[{value:"Babel plugin",id:"babel-plugin",children:[]},{value:"Android",id:"android",children:[]},{value:"iOS",id:"ios",children:[]}],d={rightToc:c};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Reanimated 2 is primarily build in C++ using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-native-community/discussions-and-proposals/issues/40"}),"Turbo Modules")," infrastructure which is not yet completely deployed in React Native (specifically on Android).\nBecause of that the installation of new Reanimated requires additional steps apart from just adding a dependency to ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," . "),Object(o.b)("p",null,"As a consequence of the above the minimum suppoorted version of React Native is ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/releases/tag/v0.62.0"}),"v0. 62"),".\nBefore you continue with the installation, make sure that you are running the supported version of React Native. "),Object(o.b)("p",null,"Please follow the below instructions for Android and iOS. "),Object(o.b)("h2",{id:"babel-plugin"},"Babel plugin"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"add Reanimated plugin to your ",Object(o.b)("inlineCode",{parentName:"p"},"babel.config.js")," :"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{5}","{5}":!0}),"  module.exports = {\n      ...\n      plugins: [\n          ...\n          './node_modules/react-native-reanimated/babel-plugin.js',\n      ],\n  };\n")),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"NOTE:")),"  Reanimated plugin has to be listed last. ")))),Object(o.b)("h2",{id:"android"},"Android"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Turn on Hermes engine by editting ",Object(o.b)("inlineCode",{parentName:"p"},"android/app/build.gradle")," "),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:"{2}","{2}":!0}),"project.ext.react = [\n  enableHermes: true  // <- here | clean and rebuild if changing\n]\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Turn on TurboModules by editting ",Object(o.b)("inlineCode",{parentName:"p"},"MainApplication.java")," "),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:"{1,6}","{1,6}":!0}),"import com.facebook.react.config.ReactFeatureFlags; // <- add\n...\npublic class MainApplication extends Application implements ReactApplication {\n  ...\n  static { \n    ReactFeatureFlags.useTurboModules = true; // <- add\n  }\n  ...\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Plug Reanimated "),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java",metastring:"{1-2,14}","{1-2,14}":!0}),'  import com.facebook.react.bridge.JSIModulePackage; // <- add\n  import com.swmansion.reanimated.ReanimatedJSIModulePackage; // <- add\n  ...\n  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {\n  ...\n\n  @Override\n  protected String getJSMainModuleName() {\n    return "index";\n  }\n\n  @Override\n  protected JSIModulePackage getJSIModulePackage() {\n    return new ReanimatedJSIModulePackage(); // <- add\n  }\n};\n...\n')))),Object(o.b)("h2",{id:"ios"},"iOS"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"cd ios && pod install && cd ..")," ")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Add bridge property to ",Object(o.b)("inlineCode",{parentName:"p"},"AppDelegate.h")," "),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec",metastring:"{2,6}","{2,6}":!0}),"... \n@class RCTBridge; // <-add \n\n@interface AppDelegate : UIResponder <UIApplicationDelegate>\n... \n@property (nonatomic, readonly) RCTBridge *bridge; // <-add\n... \n@end\n")))),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Rename ",Object(o.b)("inlineCode",{parentName:"p"},"AppDelegate.m")," to ",Object(o.b)("inlineCode",{parentName:"p"},"AppDelagate.mm")," ")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Add AppDelegate category "),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec",metastring:"{4-14}","{4-14}":!0}),"#import <React/RCTCxxBridgeDelegate.h> \n#import <ReactCommon/RCTTurboModuleManager.h>\n...\n@interface AppDelegate() <RCTCxxBridgeDelegate, RCTTurboModuleManagerDelegate>{\n\n#ifdef RN_FABRIC_ENABLED\n  RCTSurfacePresenterBridgeAdapter *_bridgeAdapter;\n  std::shared_ptr<const facebook::react::ReactNativeConfig> _reactNativeConfig;\n  facebook::react::ContextContainer::Shared _contextContainer;\n#endif\n\n    RCTTurboModuleManager *_turboModuleManager;\n}\n@end\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Enable TurboModules"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec",metastring:"{3}","{3}":!0}),"  + (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions\n  {\n    RCTEnableTurboModule(YES); // <- add\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Set bridge property"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),"  + (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions\n\n  {\n    ...\n    _bridge = \n    ...\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Add missing methods"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),'// add headers\n#import <React/RCTDataRequestHandler. h>\n#import <React/RCTFileRequestHandler. h>\n#import <React/RCTHTTPRequestHandler. h>\n#import <React/RCTNetworking. h>\n#import <React/RCTLocalAssetImageLoader. h>\n#import <React/RCTGIFImageDecoder. h>\n#import <React/RCTImageLoader. h>\n#import "RETurboModuleProvider. h"\n#import <React/JSCExecutorFactory. h>\n... \n@implementation AppDelegate\n... \n\n# pragma mark - RCTCxxBridgeDelegate\n\n// add\n\n* (std::unique_ptr<facebook::react:: JSExecutorFactory>)jsExecutorFactoryForBridge:(RCTBridge *)bridge\n\n{\n  _turboModuleManager = [[RCTTurboModuleManager alloc] initWithBridge:bridge delegate:self]; \n  __weak __typeof(self) weakSelf = self; \n  return std::make_unique<facebook::react:: JSCExecutorFactory>([weakSelf, bridge](facebook::jsi:: Runtime &runtime) {\n\n    if (!bridge) {\n      return;\n    }\n    __typeof(self) strongSelf = weakSelf;\n    if (strongSelf) {\n      [strongSelf->_turboModuleManager installJSBindingWithRuntime:&runtime];\n    }\n\n  }); \n}\n\n  #pragma mark RCTTurboModuleManagerDelegate\n\n// add\n\n* (Class)getModuleClassFromName:(const char *)name\n\n{\n  return facebook::react:: RETurboModuleClassProvider(name); \n}\n\n// add\n\n* (std::shared_ptr<facebook::react:: TurboModule>)getTurboModule:(const std::string &)name\n\n                                                      jsInvoker:(std::shared_ptr<facebook::react::CallInvoker>)jsInvoker\n\n{\n  return facebook::react:: RETurboModuleProvider(name, jsInvoker); \n}\n\n// add\n\n* (std::shared_ptr<facebook::react:: TurboModule>)getTurboModule:(const std::string &)name\n\n                                                       instance:(id<RCTTurboModule>)instance\n                                                      jsInvoker:(std::shared_ptr<facebook::react::CallInvoker>)jsInvoker\n\n{\n  return facebook::react:: RETurboModuleProvider(name, instance, jsInvoker); \n}\n\n// add \n\n* (id<RCTTurboModule>)getModuleInstanceFromClass:(Class)moduleClass\n\n{\n  if (moduleClass == RCTImageLoader. class) {\n\n    return [[moduleClass alloc] initWithRedirectDelegate:nil loadersProvider:^NSArray<id<RCTImageURLLoader>> *{\n      return @[[RCTLocalAssetImageLoader new]];\n    } decodersProvider:^NSArray<id<RCTImageDataDecoder>> *{\n      return @[[RCTGIFImageDecoder new]];\n    }];\n\n  } else if (moduleClass == RCTNetworking. class) {\n\n    return [[moduleClass alloc] initWithHandlersProvider:^NSArray<id<RCTURLRequestHandler>> *{\n      return @[\n        [RCTHTTPRequestHandler new],\n        [RCTDataRequestHandler new],\n        [RCTFileRequestHandler new],\n      ];\n    }];\n\n  }\n  return [moduleClass new]; \n}\n \n@end\n')))))}p.isMDXComponent=!0},172:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),p=function(e){var n=r.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=p(e.components);return r.a.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),b=p(t),u=a,m=b["".concat(i,".").concat(u)]||b[u]||s[u]||o;return t?r.a.createElement(m,l(l({ref:n},d),{},{components:t})):r.a.createElement(m,l({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);