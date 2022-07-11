(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{324:function(e,v,_){"use strict";_.r(v);var l=_(13),t=Object(l.a)({},(function(){var e=this,v=e._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"文档对象模型-dom"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#文档对象模型-dom"}},[e._v("#")]),e._v(" 文档对象模型 (DOM)")]),e._v(" "),v("blockquote",[v("p",[v("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN DOM 文档"),v("OutboundLink")],1)])]),e._v(" "),v("p",[e._v("文档对象模型 (DOM) 将 web 页面与到脚本或编程语言连接起来。")]),e._v(" "),v("p",[e._v("通常是指 JavaScript，但将 HTML、SVG 或 XML 文档建模为对象并不是 JavaScript 语言的一部分。")]),e._v(" "),v("p",[e._v("DOM 模型用一个逻辑树来表示一个文档，树的每个分支的终点都是一个节点 (node)，每个节点都包含着对象 (objects)。DOM 的方法 (methods) 让你可以用特定方式操作这个树，用这些方法你可以改变文档的结构、样式或者内容。")]),e._v(" "),v("p",[e._v("节点可以关联上事件处理器，一旦某一事件被触发了，那些事件处理器就会被执行")]),e._v(" "),v("h3",{attrs:{id:"dom-接口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dom-接口"}},[e._v("#")]),e._v(" DOM 接口")]),e._v(" "),v("ul",[v("li",[e._v("Attr")]),e._v(" "),v("li",[e._v("CharacterData")]),e._v(" "),v("li",[e._v("ChildNode Experimental")]),e._v(" "),v("li",[e._v("Comment")]),e._v(" "),v("li",[e._v("CustomEvent")]),e._v(" "),v("li",[e._v("Document")]),e._v(" "),v("li",[e._v("DocumentFragment")]),e._v(" "),v("li",[e._v("DocumentType")]),e._v(" "),v("li",[e._v("DOMError")]),e._v(" "),v("li",[e._v("DOMException")]),e._v(" "),v("li",[e._v("DOMImplementation")]),e._v(" "),v("li",[e._v("DOMString")]),e._v(" "),v("li",[e._v("DOMTimeStamp")]),e._v(" "),v("li",[e._v("DOMSettableTokenList")]),e._v(" "),v("li",[e._v("DOMStringList")]),e._v(" "),v("li",[e._v("DOMTokenList")]),e._v(" "),v("li",[e._v("Element")]),e._v(" "),v("li",[e._v("Event")]),e._v(" "),v("li",[e._v("EventTarget")]),e._v(" "),v("li",[e._v("HTMLCollection")]),e._v(" "),v("li",[e._v("MutationObserver")]),e._v(" "),v("li",[e._v("MutationRecord")]),e._v(" "),v("li",[e._v("Node")]),e._v(" "),v("li",[e._v("NodeFilter")]),e._v(" "),v("li",[e._v("NodeIterator")]),e._v(" "),v("li",[e._v("NodeList")]),e._v(" "),v("li",[e._v("ParentNode Experimental")]),e._v(" "),v("li",[e._v("ProcessingInstruction (en-US)")]),e._v(" "),v("li",[e._v("Promise (en-US) Experimental")]),e._v(" "),v("li",[e._v("PromiseResolver (en-US) Experimental")]),e._v(" "),v("li",[e._v("Range")]),e._v(" "),v("li",[e._v("Text")]),e._v(" "),v("li",[e._v("TreeWalker")]),e._v(" "),v("li",[e._v("URL")]),e._v(" "),v("li",[e._v("Window")]),e._v(" "),v("li",[e._v("Worker")]),e._v(" "),v("li",[e._v("XMLDocument Experimental")])]),e._v(" "),v("h3",{attrs:{id:"过时的-dom-接口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#过时的-dom-接口"}},[e._v("#")]),e._v(" 过时的 DOM 接口")]),e._v(" "),v("p",[e._v("DOM 模型已经被高度简化了。为此，以下出现在 DOM level 3 或更早的规范里的接口已经被移除了。 现在不是非常确定是否有一些会被重新引进，但是当前应该把它们看作废弃的，应当避免使用：")]),e._v(" "),v("ul",[v("li",[e._v("CDATASection")]),e._v(" "),v("li",[e._v("DOMConfiguration")]),e._v(" "),v("li",[e._v("DOMErrorHandler")]),e._v(" "),v("li",[e._v("DOMImplementationList")]),e._v(" "),v("li",[e._v("DOMImplementationRegistry")]),e._v(" "),v("li",[e._v("DOMImplementationSource")]),e._v(" "),v("li",[e._v("DOMLocator")]),e._v(" "),v("li",[e._v("DOMObject")]),e._v(" "),v("li",[e._v("DOMUserData")]),e._v(" "),v("li",[e._v("Entity")]),e._v(" "),v("li",[e._v("EntityReference")]),e._v(" "),v("li",[e._v("NamedNodeMap")]),e._v(" "),v("li",[e._v("NameList")]),e._v(" "),v("li",[e._v("Notation")]),e._v(" "),v("li",[e._v("TypeInfo")]),e._v(" "),v("li",[e._v("UserDataHandler")])]),e._v(" "),v("h2",{attrs:{id:"html-接口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#html-接口"}},[e._v("#")]),e._v(" HTML 接口")]),e._v(" "),v("p",[e._v("HTMLDocument 接口描述了包含 HTML 的文档。注意：HTML 规范也继承了 Document 接口。")]),e._v(" "),v("p",[e._v("一个 HTMLDocument 对象还可以访问浏览器的各种功能：例如使用 Window 接口来绘制的标签或窗口，与之关联的样式 Style（通常是 CSS），浏览器相对于上下文的历史记录 History，以及文档内的选区 Selection 等。")]),e._v(" "),v("h3",{attrs:{id:"html-元素接口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#html-元素接口"}},[e._v("#")]),e._v(" HTML 元素接口")]),e._v(" "),v("ul",[v("li",[e._v("HTMLAnchorElement")]),e._v(" "),v("li",[e._v("HTMLAppletElement")]),e._v(" "),v("li",[e._v("HTMLAreaElement")]),e._v(" "),v("li",[e._v("HTMLAudioElement")]),e._v(" "),v("li",[e._v("HTMLBaseElement")]),e._v(" "),v("li",[e._v("HTMLBodyElement")]),e._v(" "),v("li",[e._v("HTMLBRElement")]),e._v(" "),v("li",[e._v("HTMLButtonElement")]),e._v(" "),v("li",[e._v("HTMLCanvasElement")]),e._v(" "),v("li",[e._v("HTMLDataElement")]),e._v(" "),v("li",[e._v("HTMLDataListElement (en-US)")]),e._v(" "),v("li",[e._v("HTMLDirectoryElement")]),e._v(" "),v("li",[e._v("HTMLDivElement")]),e._v(" "),v("li",[e._v("HTMLDListElement (en-US)")]),e._v(" "),v("li",[e._v("HTMLElement")]),e._v(" "),v("li",[e._v("HTMLEmbedElement (en-US)")]),e._v(" "),v("li",[e._v("HTMLFieldSetElement")]),e._v(" "),v("li",[e._v("HTMLFontElement (en-US)")]),e._v(" "),v("li",[e._v("HTMLFormElement")]),e._v(" "),v("li",[e._v("HTMLFrameElement")]),e._v(" "),v("li",[e._v("HTMLFrameSetElement (en-US)")]),e._v(" "),v("li",[e._v("HTMLHeadElement")]),e._v(" "),v("li",[e._v("HTMLHeadingElement (en-US)")]),e._v(" "),v("li",[e._v("HTMLHtmlElement")]),e._v(" "),v("li",[e._v("HTMLHRElement (en-US)")]),e._v(" "),v("li",[e._v("HTMLIFrameElement")]),e._v(" "),v("li",[e._v("HTMLImageElement")]),e._v(" "),v("li",[e._v("HTMLInputElement")]),e._v(" "),v("li",[e._v("HTMLKeygenElement (en-US)")]),e._v(" "),v("li",[e._v("HTMLLabelElement")]),e._v(" "),v("li",[e._v("HTMLLegendElement (en-US)")]),e._v(" "),v("li",[e._v("HTMLLIElement")]),e._v(" "),v("li",[e._v("HTMLLinkElement")]),e._v(" "),v("li",[e._v("HTMLMapElement (en-US)")]),e._v(" "),v("li",[e._v("HTMLMediaElement")]),e._v(" "),v("li",[e._v("HTMLMenuElement (en-US)")]),e._v(" "),v("li",[e._v("HTMLMetaElement (en-US)")]),e._v(" "),v("li",[e._v("HTMLMeterElement (en-US)")]),e._v(" "),v("li",[e._v("HTMLModElement (en-US)")]),e._v(" "),v("li",[e._v("HTMLObjectElement (en-US)")]),e._v(" "),v("li",[e._v("HTMLOListElement (en-US)")]),e._v(" "),v("li",[e._v("HTMLOptGroupElement")]),e._v(" "),v("li",[e._v("HTMLOptionElement")]),e._v(" "),v("li",[e._v("HTMLOutputElement (en-US)")]),e._v(" "),v("li",[e._v("HTMLParagraphElement")]),e._v(" "),v("li",[e._v("HTMLParamElement (en-US)")]),e._v(" "),v("li",[e._v("HTMLPreElement (en-US)")]),e._v(" "),v("li",[e._v("HTMLProgressElement")]),e._v(" "),v("li",[e._v("HTMLQuoteElement (en-US)")]),e._v(" "),v("li",[e._v("HTMLScriptElement")]),e._v(" "),v("li",[e._v("HTMLSelectElement")]),e._v(" "),v("li",[e._v("HTMLSourceElement (en-US)")]),e._v(" "),v("li",[e._v("HTMLSpanElement")]),e._v(" "),v("li",[e._v("HTMLStyleElement")]),e._v(" "),v("li",[e._v("HTMLTableElement")]),e._v(" "),v("li",[e._v("HTMLTableCaptionElement (en-US)")]),e._v(" "),v("li",[e._v("HTMLTableCellElement (en-US)")]),e._v(" "),v("li",[e._v("HTMLTableDataCellElement (en-US)")]),e._v(" "),v("li",[e._v("HTMLTableHeaderCellElement (en-US)")]),e._v(" "),v("li",[e._v("HTMLTableColElement (en-US)")]),e._v(" "),v("li",[e._v("HTMLTableRowElement")]),e._v(" "),v("li",[e._v("HTMLTableSectionElement (en-US)")]),e._v(" "),v("li",[e._v("HTMLTextAreaElement")]),e._v(" "),v("li",[e._v("HTMLTimeElement (en-US)")]),e._v(" "),v("li",[e._v("HTMLTitleElement (en-US)")]),e._v(" "),v("li",[e._v("HTMLTrackElement (en-US)")]),e._v(" "),v("li",[e._v("HTMLUListElement (en-US)")]),e._v(" "),v("li",[e._v("HTMLUnknownElement")]),e._v(" "),v("li",[e._v("HTMLVideoElement")])]),e._v(" "),v("h3",{attrs:{id:"其他接口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#其他接口"}},[e._v("#")]),e._v(" 其他接口")]),e._v(" "),v("ul",[v("li",[e._v("CanvasRenderingContext2D")]),e._v(" "),v("li",[e._v("CanvasGradient")]),e._v(" "),v("li",[e._v("CanvasPattern")]),e._v(" "),v("li",[e._v("TextMetrics")]),e._v(" "),v("li",[e._v("ImageData")]),e._v(" "),v("li",[e._v("CanvasPixelArray (en-US)")]),e._v(" "),v("li",[e._v("NotifyAudioAvailableEvent")]),e._v(" "),v("li",[e._v("HTMLAllCollection")]),e._v(" "),v("li",[e._v("HTMLFormControlsCollection (en-US)")]),e._v(" "),v("li",[e._v("HTMLOptionsCollection (en-US)")]),e._v(" "),v("li",[e._v("HTMLPropertiesCollection")]),e._v(" "),v("li",[e._v("DOMStringMap")]),e._v(" "),v("li",[e._v("RadioNodeList (en-US)")]),e._v(" "),v("li",[e._v("MediaError (en-US)")])]),e._v(" "),v("h3",{attrs:{id:"过时的-html-接口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#过时的-html-接口"}},[e._v("#")]),e._v(" 过时的 HTML 接口")]),e._v(" "),v("ul",[v("li",[e._v("HTMLBaseFontElement")]),e._v(" "),v("li",[e._v("HTMLIsIndexElement")])]),e._v(" "),v("h2",{attrs:{id:"svg-接口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#svg-接口"}},[e._v("#")]),e._v(" SVG 接口")]),e._v(" "),v("h3",{attrs:{id:"svg-元素接口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#svg-元素接口"}},[e._v("#")]),e._v(" SVG 元素接口")]),e._v(" "),v("ul",[v("li",[e._v("SVGAElement")]),e._v(" "),v("li",[e._v("SVGAltGlyphElement (en-US)")]),e._v(" "),v("li",[e._v("SVGAltGlyphDefElement (en-US)")]),e._v(" "),v("li",[e._v("SVGAltGlyphItemElement (en-US)")]),e._v(" "),v("li",[e._v("SVGAnimationElement")]),e._v(" "),v("li",[e._v("SVGAnimateElement")]),e._v(" "),v("li",[e._v("SVGAnimateColorElement (en-US)")]),e._v(" "),v("li",[e._v("SVGAnimateMotionElement (en-US)")]),e._v(" "),v("li",[e._v("SVGAnimateTransformElement (en-US)")]),e._v(" "),v("li",[e._v("SVGCircleElement")]),e._v(" "),v("li",[e._v("SVGClipPathElement (en-US)")]),e._v(" "),v("li",[e._v("SVGColorProfileElement")]),e._v(" "),v("li",[e._v("SVGComponentTransferFunctionElement (en-US)")]),e._v(" "),v("li",[e._v("SVGCursorElement (en-US)")]),e._v(" "),v("li",[e._v("SVGDefsElement (en-US)")]),e._v(" "),v("li",[e._v("SVGDescElement (en-US)")]),e._v(" "),v("li",[e._v("SVGElement")]),e._v(" "),v("li",[e._v("SVGEllipseElement (en-US)")]),e._v(" "),v("li",[e._v("SVGFEBlendElement (en-US)")]),e._v(" "),v("li",[e._v("SVGFEColorMatrixElement (en-US)")]),e._v(" "),v("li",[e._v("SVGFEComponentTransferElement (en-US)")]),e._v(" "),v("li",[e._v("SVGFECompositeElement (en-US)")]),e._v(" "),v("li",[e._v("SVGFEConvolveMatrixElement (en-US)")]),e._v(" "),v("li",[e._v("SVGFEDiffuseLightingElement (en-US)")]),e._v(" "),v("li",[e._v("SVGFEDisplacementMapElement (en-US)")]),e._v(" "),v("li",[e._v("SVGFEDistantLightElement (en-US)")]),e._v(" "),v("li",[e._v("SVGFEFloodElement (en-US)")]),e._v(" "),v("li",[e._v("SVGFEGaussianBlurElement (en-US)")]),e._v(" "),v("li",[e._v("SVGFEImageElement (en-US)")]),e._v(" "),v("li",[e._v("SVGFEMergeElement (en-US)")]),e._v(" "),v("li",[e._v("SVGFEMergeNodeElement (en-US)")]),e._v(" "),v("li",[e._v("SVGFEMorphologyElement (en-US)")]),e._v(" "),v("li",[e._v("SVGFEOffsetElement (en-US)")]),e._v(" "),v("li",[e._v("SVGFEPointLightElement (en-US)")]),e._v(" "),v("li",[e._v("SVGFESpecularLightingElement (en-US)")]),e._v(" "),v("li",[e._v("SVGFESpotLightElement (en-US)")]),e._v(" "),v("li",[e._v("SVGFETileElement (en-US)")]),e._v(" "),v("li",[e._v("SVGFETurbulenceElement (en-US)")]),e._v(" "),v("li",[e._v("SVGFEFuncRElement (en-US)")]),e._v(" "),v("li",[e._v("SVGFEFuncGElement (en-US)")]),e._v(" "),v("li",[e._v("SVGFEFuncBElement (en-US)")]),e._v(" "),v("li",[e._v("SVGFEFuncAElement (en-US)")]),e._v(" "),v("li",[e._v("SVGFilterElement (en-US)")]),e._v(" "),v("li",[e._v("SVGFilterPrimitiveStandardAttributes")]),e._v(" "),v("li",[e._v("SVGFontElement (en-US)")]),e._v(" "),v("li",[e._v("SVGFontFaceElement (en-US)")]),e._v(" "),v("li",[e._v("SVGFontFaceFormatElement (en-US)")]),e._v(" "),v("li",[e._v("SVGFontFaceNameElement (en-US)")]),e._v(" "),v("li",[e._v("SVGFontFaceSrcElement (en-US)")]),e._v(" "),v("li",[e._v("SVGFontFaceUriElement (en-US)")]),e._v(" "),v("li",[e._v("SVGForeignObjectElement (en-US)")]),e._v(" "),v("li",[e._v("SVGGElement (en-US)")]),e._v(" "),v("li",[e._v("SVGGlyphElement (en-US)")]),e._v(" "),v("li",[e._v("SVGGlyphRefElement (en-US)")]),e._v(" "),v("li",[e._v("SVGGradientElement (en-US)")]),e._v(" "),v("li",[e._v("SVGHKernElement (en-US)")]),e._v(" "),v("li",[e._v("SVGImageElement (en-US)")]),e._v(" "),v("li",[e._v("SVGLinearGradientElement (en-US)")]),e._v(" "),v("li",[e._v("SVGLineElement (en-US)")]),e._v(" "),v("li",[e._v("SVGMarkerElement (en-US)")]),e._v(" "),v("li",[e._v("SVGMaskElement (en-US)")]),e._v(" "),v("li",[e._v("SVGMetadataElement (en-US)")]),e._v(" "),v("li",[e._v("SVGMissingGlyphElement (en-US)")]),e._v(" "),v("li",[e._v("SVGMPathElement (en-US)")]),e._v(" "),v("li",[e._v("SVGPathElement")]),e._v(" "),v("li",[e._v("SVGPatternElement (en-US)")]),e._v(" "),v("li",[e._v("SVGPolylineElement (en-US)")]),e._v(" "),v("li",[e._v("SVGPolygonElement (en-US)")]),e._v(" "),v("li",[e._v("SVGRadialGradientElement (en-US)")]),e._v(" "),v("li",[e._v("SVGRectElement (en-US)")]),e._v(" "),v("li",[e._v("SVGScriptElement (en-US)")]),e._v(" "),v("li",[e._v("SVGSetElement (en-US)")]),e._v(" "),v("li",[e._v("SVGStopElement (en-US)")]),e._v(" "),v("li",[e._v("SVGStyleElement (en-US)")]),e._v(" "),v("li",[e._v("SVGSVGElement")]),e._v(" "),v("li",[e._v("SVGSwitchElement (en-US)")]),e._v(" "),v("li",[e._v("SVGSymbolElement (en-US)")]),e._v(" "),v("li",[e._v("SVGTextElement (en-US)")]),e._v(" "),v("li",[e._v("SVGTextPathElement (en-US)")]),e._v(" "),v("li",[e._v("SVGTitleElement (en-US)")]),e._v(" "),v("li",[e._v("SVGTRefElement (en-US)")]),e._v(" "),v("li",[e._v("SVGTSpanElement (en-US)")]),e._v(" "),v("li",[e._v("SVGUseElement")]),e._v(" "),v("li",[e._v("SVGViewElement (en-US)")]),e._v(" "),v("li",[e._v("SVGVKernElement (en-US)")])]),e._v(" "),v("h3",{attrs:{id:"svg-数据类型接口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#svg-数据类型接口"}},[e._v("#")]),e._v(" SVG 数据类型接口")]),e._v(" "),v("p",[e._v("用于定义 SVG 属性 properties 和 attributes 数据类型的 DOM API")]),e._v(" "),v("p",[e._v("注意： Starting in Gecko 5.0,the following SVG-related DOM interfaces representing lists of objects are now indexable and can be accessed like arrays; in addition, they have a length property indicating the number of items in the lists: SVGLengthList (en-US), SVGNumberList (en-US), SVGPathSegList, and SVGPointList (en-US).")]),e._v(" "),v("h4",{attrs:{id:"static-type"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#static-type"}},[e._v("#")]),e._v(" Static type")]),e._v(" "),v("ul",[v("li",[e._v("SVGAngle (en-US)")]),e._v(" "),v("li",[e._v("SVGColor")]),e._v(" "),v("li",[e._v("SVGICCColor")]),e._v(" "),v("li",[e._v("SVGElementInstance")]),e._v(" "),v("li",[e._v("SVGElementInstanceList")]),e._v(" "),v("li",[e._v("SVGLength (en-US)")]),e._v(" "),v("li",[e._v("SVGLengthList (en-US)")]),e._v(" "),v("li",[e._v("SVGMatrix")]),e._v(" "),v("li",[e._v("SVGNumber (en-US)")]),e._v(" "),v("li",[e._v("SVGNumberList (en-US)")]),e._v(" "),v("li",[e._v("SVGPaint")]),e._v(" "),v("li",[e._v("SVGPoint (en-US)")]),e._v(" "),v("li",[e._v("SVGPointList (en-US)")]),e._v(" "),v("li",[e._v("SVGPreserveAspectRatio (en-US)")]),e._v(" "),v("li",[e._v("SVGRect (en-US)")]),e._v(" "),v("li",[e._v("SVGStringList (en-US)")]),e._v(" "),v("li",[e._v("SVGTransform (en-US)")]),e._v(" "),v("li",[e._v("SVGTransformList (en-US)")])]),e._v(" "),v("h4",{attrs:{id:"animated-type"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#animated-type"}},[e._v("#")]),e._v(" Animated type")]),e._v(" "),v("ul",[v("li",[e._v("SVGAnimatedAngle")]),e._v(" "),v("li",[e._v("SVGAnimatedBoolean (en-US)")]),e._v(" "),v("li",[e._v("SVGAnimatedEnumeration (en-US)")]),e._v(" "),v("li",[e._v("SVGAnimatedInteger (en-US)")]),e._v(" "),v("li",[e._v("SVGAnimatedLength (en-US)")]),e._v(" "),v("li",[e._v("SVGAnimatedLengthList (en-US)")]),e._v(" "),v("li",[e._v("SVGAnimatedNumber (en-US)")]),e._v(" "),v("li",[e._v("SVGAnimatedNumberList (en-US)")]),e._v(" "),v("li",[e._v("SVGAnimatedPreserveAspectRatio (en-US)")]),e._v(" "),v("li",[e._v("SVGAnimatedRect (en-US)")]),e._v(" "),v("li",[e._v("SVGAnimatedString (en-US)")]),e._v(" "),v("li",[e._v("SVGAnimatedTransformList (en-US)")])]),e._v(" "),v("h3",{attrs:{id:"svg-路径段接口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#svg-路径段接口"}},[e._v("#")]),e._v(" SVG 路径段接口")]),e._v(" "),v("ul",[v("li",[e._v("SVGPathSegList")]),e._v(" "),v("li",[e._v("SVGPathSeg")]),e._v(" "),v("li",[e._v("SVGPathSegArcAbs")]),e._v(" "),v("li",[e._v("SVGPathSegArcRel")]),e._v(" "),v("li",[e._v("SVGPathSegClosePath")]),e._v(" "),v("li",[e._v("SVGPathSegCurvetoCubicAbs")]),e._v(" "),v("li",[e._v("SVGPathSegCurvetoCubicRel")]),e._v(" "),v("li",[e._v("SVGPathSegCurvetoCubicSmoothAbs")]),e._v(" "),v("li",[e._v("SVGPathSegCurvetoCubicSmoothRel")]),e._v(" "),v("li",[e._v("SVGPathSegCurvetoQuadraticAbs")]),e._v(" "),v("li",[e._v("SVGPathSegCurvetoQuadraticRel")]),e._v(" "),v("li",[e._v("SVGPathSegCurvetoQuadraticSmoothAbs")]),e._v(" "),v("li",[e._v("SVGPathSegCurvetoQuadraticSmoothRel")]),e._v(" "),v("li",[e._v("SVGPathSegLinetoAbs")]),e._v(" "),v("li",[e._v("SVGPathSegLinetoHorizontalAbs")]),e._v(" "),v("li",[e._v("SVGPathSegLinetoHorizontalRel")]),e._v(" "),v("li",[e._v("SVGPathSegLinetoRel")]),e._v(" "),v("li",[e._v("SVGPathSegLinetoVerticalAbs")]),e._v(" "),v("li",[e._v("SVGPathSegLinetoVerticalRel")]),e._v(" "),v("li",[e._v("SVGPathSegMovetoAbs")]),e._v(" "),v("li",[e._v("SVGPathSegMovetoRel")])]),e._v(" "),v("h3",{attrs:{id:"smil-相关接口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#smil-相关接口"}},[e._v("#")]),e._v(" SMIL 相关接口")]),e._v(" "),v("ul",[v("li",[e._v("ElementTimeControl")]),e._v(" "),v("li",[e._v("TimeEvent (en-US)")])]),e._v(" "),v("h3",{attrs:{id:"其他的-svg-接口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#其他的-svg-接口"}},[e._v("#")]),e._v(" 其他的 SVG 接口")]),e._v(" "),v("ul",[v("li",[e._v("SVGAnimatedPathData")]),e._v(" "),v("li",[e._v("SVGAnimatedPoints (en-US)")]),e._v(" "),v("li",[e._v("SVGColorProfileRule")]),e._v(" "),v("li",[e._v("SVGCSSRule")]),e._v(" "),v("li",[e._v("SVGExternalResourcesRequired")]),e._v(" "),v("li",[e._v("SVGFitToViewBox")]),e._v(" "),v("li",[e._v("SVGLangSpace")]),e._v(" "),v("li",[e._v("SVGLocatable")]),e._v(" "),v("li",[e._v("SVGRenderingIntent (en-US)")]),e._v(" "),v("li",[e._v("SVGStylable (en-US)")]),e._v(" "),v("li",[e._v("SVGTests")]),e._v(" "),v("li",[e._v("SVGTextContentElement (en-US)")]),e._v(" "),v("li",[e._v("SVGTextPositioningElement (en-US)")]),e._v(" "),v("li",[e._v("SVGTransformable")]),e._v(" "),v("li",[e._v("SVGUnitTypes (en-US)")]),e._v(" "),v("li",[e._v("SVGURIReference (en-US)")]),e._v(" "),v("li",[e._v("SVGViewSpec")]),e._v(" "),v("li",[e._v("SVGZoomAndPan")])])])}),[],!1,null,null,null);v.default=t.exports}}]);