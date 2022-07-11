# 文档对象模型 (DOM)

> [MDN DOM 文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model)

文档对象模型 (DOM) 将 web 页面与到脚本或编程语言连接起来。

通常是指 JavaScript，但将 HTML、SVG 或 XML 文档建模为对象并不是 JavaScript 语言的一部分。

DOM 模型用一个逻辑树来表示一个文档，树的每个分支的终点都是一个节点 (node)，每个节点都包含着对象 (objects)。DOM 的方法 (methods) 让你可以用特定方式操作这个树，用这些方法你可以改变文档的结构、样式或者内容。

节点可以关联上事件处理器，一旦某一事件被触发了，那些事件处理器就会被执行

### DOM 接口

- Attr
- CharacterData
- ChildNode Experimental
- Comment
- CustomEvent
- Document
- DocumentFragment
- DocumentType
- DOMError
- DOMException
- DOMImplementation
- DOMString
- DOMTimeStamp
- DOMSettableTokenList
- DOMStringList
- DOMTokenList
- Element
- Event
- EventTarget
- HTMLCollection
- MutationObserver
- MutationRecord
- Node
- NodeFilter
- NodeIterator
- NodeList
- ParentNode Experimental
- ProcessingInstruction (en-US)
- Promise (en-US) Experimental
- PromiseResolver (en-US) Experimental
- Range
- Text
- TreeWalker
- URL
- Window
- Worker
- XMLDocument Experimental

### 过时的 DOM 接口

DOM 模型已经被高度简化了。为此，以下出现在 DOM level 3 或更早的规范里的接口已经被移除了。 现在不是非常确定是否有一些会被重新引进，但是当前应该把它们看作废弃的，应当避免使用：

- CDATASection
- DOMConfiguration
- DOMErrorHandler
- DOMImplementationList
- DOMImplementationRegistry
- DOMImplementationSource
- DOMLocator
- DOMObject
- DOMUserData
- Entity
- EntityReference
- NamedNodeMap
- NameList
- Notation
- TypeInfo
- UserDataHandler

## HTML 接口

HTMLDocument 接口描述了包含 HTML 的文档。注意：HTML 规范也继承了 Document 接口。

一个 HTMLDocument 对象还可以访问浏览器的各种功能：例如使用 Window 接口来绘制的标签或窗口，与之关联的样式 Style（通常是 CSS），浏览器相对于上下文的历史记录 History，以及文档内的选区 Selection 等。

### HTML 元素接口

- HTMLAnchorElement
- HTMLAppletElement
- HTMLAreaElement
- HTMLAudioElement
- HTMLBaseElement
- HTMLBodyElement
- HTMLBRElement
- HTMLButtonElement
- HTMLCanvasElement
- HTMLDataElement
- HTMLDataListElement (en-US)
- HTMLDirectoryElement
- HTMLDivElement
- HTMLDListElement (en-US)
- HTMLElement
- HTMLEmbedElement (en-US)
- HTMLFieldSetElement
- HTMLFontElement (en-US)
- HTMLFormElement
- HTMLFrameElement
- HTMLFrameSetElement (en-US)
- HTMLHeadElement
- HTMLHeadingElement (en-US)
- HTMLHtmlElement
- HTMLHRElement (en-US)
- HTMLIFrameElement
- HTMLImageElement
- HTMLInputElement
- HTMLKeygenElement (en-US)
- HTMLLabelElement
- HTMLLegendElement (en-US)
- HTMLLIElement
- HTMLLinkElement
- HTMLMapElement (en-US)
- HTMLMediaElement
- HTMLMenuElement (en-US)
- HTMLMetaElement (en-US)
- HTMLMeterElement (en-US)
- HTMLModElement (en-US)
- HTMLObjectElement (en-US)
- HTMLOListElement (en-US)
- HTMLOptGroupElement
- HTMLOptionElement
- HTMLOutputElement (en-US)
- HTMLParagraphElement
- HTMLParamElement (en-US)
- HTMLPreElement (en-US)
- HTMLProgressElement
- HTMLQuoteElement (en-US)
- HTMLScriptElement
- HTMLSelectElement
- HTMLSourceElement (en-US)
- HTMLSpanElement
- HTMLStyleElement
- HTMLTableElement
- HTMLTableCaptionElement (en-US)
- HTMLTableCellElement (en-US)
- HTMLTableDataCellElement (en-US)
- HTMLTableHeaderCellElement (en-US)
- HTMLTableColElement (en-US)
- HTMLTableRowElement
- HTMLTableSectionElement (en-US)
- HTMLTextAreaElement
- HTMLTimeElement (en-US)
- HTMLTitleElement (en-US)
- HTMLTrackElement (en-US)
- HTMLUListElement (en-US)
- HTMLUnknownElement
- HTMLVideoElement

### 其他接口

- CanvasRenderingContext2D
- CanvasGradient
- CanvasPattern
- TextMetrics
- ImageData
- CanvasPixelArray (en-US)
- NotifyAudioAvailableEvent
- HTMLAllCollection
- HTMLFormControlsCollection (en-US)
- HTMLOptionsCollection (en-US)
- HTMLPropertiesCollection
- DOMStringMap
- RadioNodeList (en-US)
- MediaError (en-US)

### 过时的 HTML 接口

- HTMLBaseFontElement
- HTMLIsIndexElement

## SVG 接口

### SVG 元素接口

- SVGAElement
- SVGAltGlyphElement (en-US)
- SVGAltGlyphDefElement (en-US)
- SVGAltGlyphItemElement (en-US)
- SVGAnimationElement
- SVGAnimateElement
- SVGAnimateColorElement (en-US)
- SVGAnimateMotionElement (en-US)
- SVGAnimateTransformElement (en-US)
- SVGCircleElement
- SVGClipPathElement (en-US)
- SVGColorProfileElement
- SVGComponentTransferFunctionElement (en-US)
- SVGCursorElement (en-US)
- SVGDefsElement (en-US)
- SVGDescElement (en-US)
- SVGElement
- SVGEllipseElement (en-US)
- SVGFEBlendElement (en-US)
- SVGFEColorMatrixElement (en-US)
- SVGFEComponentTransferElement (en-US)
- SVGFECompositeElement (en-US)
- SVGFEConvolveMatrixElement (en-US)
- SVGFEDiffuseLightingElement (en-US)
- SVGFEDisplacementMapElement (en-US)
- SVGFEDistantLightElement (en-US)
- SVGFEFloodElement (en-US)
- SVGFEGaussianBlurElement (en-US)
- SVGFEImageElement (en-US)
- SVGFEMergeElement (en-US)
- SVGFEMergeNodeElement (en-US)
- SVGFEMorphologyElement (en-US)
- SVGFEOffsetElement (en-US)
- SVGFEPointLightElement (en-US)
- SVGFESpecularLightingElement (en-US)
- SVGFESpotLightElement (en-US)
- SVGFETileElement (en-US)
- SVGFETurbulenceElement (en-US)
- SVGFEFuncRElement (en-US)
- SVGFEFuncGElement (en-US)
- SVGFEFuncBElement (en-US)
- SVGFEFuncAElement (en-US)
- SVGFilterElement (en-US)
- SVGFilterPrimitiveStandardAttributes
- SVGFontElement (en-US)
- SVGFontFaceElement (en-US)
- SVGFontFaceFormatElement (en-US)
- SVGFontFaceNameElement (en-US)
- SVGFontFaceSrcElement (en-US)
- SVGFontFaceUriElement (en-US)
- SVGForeignObjectElement (en-US)
- SVGGElement (en-US)
- SVGGlyphElement (en-US)
- SVGGlyphRefElement (en-US)
- SVGGradientElement (en-US)
- SVGHKernElement (en-US)
- SVGImageElement (en-US)
- SVGLinearGradientElement (en-US)
- SVGLineElement (en-US)
- SVGMarkerElement (en-US)
- SVGMaskElement (en-US)
- SVGMetadataElement (en-US)
- SVGMissingGlyphElement (en-US)
- SVGMPathElement (en-US)
- SVGPathElement
- SVGPatternElement (en-US)
- SVGPolylineElement (en-US)
- SVGPolygonElement (en-US)
- SVGRadialGradientElement (en-US)
- SVGRectElement (en-US)
- SVGScriptElement (en-US)
- SVGSetElement (en-US)
- SVGStopElement (en-US)
- SVGStyleElement (en-US)
- SVGSVGElement
- SVGSwitchElement (en-US)
- SVGSymbolElement (en-US)
- SVGTextElement (en-US)
- SVGTextPathElement (en-US)
- SVGTitleElement (en-US)
- SVGTRefElement (en-US)
- SVGTSpanElement (en-US)
- SVGUseElement
- SVGViewElement (en-US)
- SVGVKernElement (en-US)

### SVG 数据类型接口

用于定义 SVG 属性 properties 和 attributes 数据类型的 DOM API

注意： Starting in Gecko 5.0,the following SVG-related DOM interfaces representing lists of objects are now indexable and can be accessed like arrays; in addition, they have a length property indicating the number of items in the lists: SVGLengthList (en-US), SVGNumberList (en-US), SVGPathSegList, and SVGPointList (en-US).

#### Static type

- SVGAngle (en-US)
- SVGColor
- SVGICCColor
- SVGElementInstance
- SVGElementInstanceList
- SVGLength (en-US)
- SVGLengthList (en-US)
- SVGMatrix
- SVGNumber (en-US)
- SVGNumberList (en-US)
- SVGPaint
- SVGPoint (en-US)
- SVGPointList (en-US)
- SVGPreserveAspectRatio (en-US)
- SVGRect (en-US)
- SVGStringList (en-US)
- SVGTransform (en-US)
- SVGTransformList (en-US)

#### Animated type

- SVGAnimatedAngle
- SVGAnimatedBoolean (en-US)
- SVGAnimatedEnumeration (en-US)
- SVGAnimatedInteger (en-US)
- SVGAnimatedLength (en-US)
- SVGAnimatedLengthList (en-US)
- SVGAnimatedNumber (en-US)
- SVGAnimatedNumberList (en-US)
- SVGAnimatedPreserveAspectRatio (en-US)
- SVGAnimatedRect (en-US)
- SVGAnimatedString (en-US)
- SVGAnimatedTransformList (en-US)

### SVG 路径段接口

- SVGPathSegList
- SVGPathSeg
- SVGPathSegArcAbs
- SVGPathSegArcRel
- SVGPathSegClosePath
- SVGPathSegCurvetoCubicAbs
- SVGPathSegCurvetoCubicRel
- SVGPathSegCurvetoCubicSmoothAbs
- SVGPathSegCurvetoCubicSmoothRel
- SVGPathSegCurvetoQuadraticAbs
- SVGPathSegCurvetoQuadraticRel
- SVGPathSegCurvetoQuadraticSmoothAbs
- SVGPathSegCurvetoQuadraticSmoothRel
- SVGPathSegLinetoAbs
- SVGPathSegLinetoHorizontalAbs
- SVGPathSegLinetoHorizontalRel
- SVGPathSegLinetoRel
- SVGPathSegLinetoVerticalAbs
- SVGPathSegLinetoVerticalRel
- SVGPathSegMovetoAbs
- SVGPathSegMovetoRel

### SMIL 相关接口

- ElementTimeControl
- TimeEvent (en-US)

### 其他的 SVG 接口

- SVGAnimatedPathData
- SVGAnimatedPoints (en-US)
- SVGColorProfileRule
- SVGCSSRule
- SVGExternalResourcesRequired
- SVGFitToViewBox
- SVGLangSpace
- SVGLocatable
- SVGRenderingIntent (en-US)
- SVGStylable (en-US)
- SVGTests
- SVGTextContentElement (en-US)
- SVGTextPositioningElement (en-US)
- SVGTransformable
- SVGUnitTypes (en-US)
- SVGURIReference (en-US)
- SVGViewSpec
- SVGZoomAndPan
