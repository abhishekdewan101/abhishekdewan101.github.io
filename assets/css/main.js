import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "16pt",
        "font": "inherit",
        "verticalAlign": "baseline",
        "lineHeight": 1.75,
        "WebkitTextSizeAdjust": "none",
        "MsOverflowStyle": "scrollbar",
        "background": "#ffffff",
        "color": "#585858",
        "fontFamily": "\"Source Sans Pro\", Helvetica, sans-serif",
        "fontWeight": "300"
    },
    "div": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "span": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "applet": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "object": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "iframe": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "h1": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": 2.75,
        "font": "inherit",
        "verticalAlign": "baseline",
        "fontWeight": "700",
        "lineHeight": 1.3,
        "letterSpacing": -0.035
    },
    "h2": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": 1.1,
        "font": "inherit",
        "verticalAlign": "baseline",
        "fontWeight": "900",
        "lineHeight": 1.5,
        "textTransform": "uppercase",
        "letterSpacing": 0.35
    },
    "h3": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": 1,
        "font": "inherit",
        "verticalAlign": "baseline",
        "fontWeight": "900",
        "lineHeight": 1.5,
        "textTransform": "uppercase",
        "letterSpacing": 0.35
    },
    "h4": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": 0.8,
        "font": "inherit",
        "verticalAlign": "baseline",
        "fontWeight": "900",
        "lineHeight": 1.5,
        "textTransform": "uppercase",
        "letterSpacing": 0.35
    },
    "h5": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": 0.8,
        "font": "inherit",
        "verticalAlign": "baseline",
        "fontWeight": "900",
        "lineHeight": 1.5,
        "textTransform": "uppercase",
        "letterSpacing": 0.35
    },
    "h6": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": 0.8,
        "font": "inherit",
        "verticalAlign": "baseline",
        "fontWeight": "900",
        "lineHeight": 1.5,
        "textTransform": "uppercase",
        "letterSpacing": 0.35
    },
    "p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "blockquote": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "paddingTop": 0.5,
        "paddingRight": 0,
        "paddingBottom": 0.5,
        "paddingLeft": 2,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "quotes": "none",
        "borderLeft": "solid 4px #c9c9c9",
        "fontStyle": "italic"
    },
    "pre": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": 0.9,
        "font": "inherit",
        "verticalAlign": "baseline",
        "WebkitOverflowScrolling": "touch",
        "fontFamily": "\"Courier New\", monospace"
    },
    "a": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "MozTransition": "border-bottom-color 0.2s ease, color 0.2s ease",
        "WebkitTransition": "border-bottom-color 0.2s ease, color 0.2s ease",
        "MsTransition": "border-bottom-color 0.2s ease, color 0.2s ease",
        "transition": "border-bottom-color 0.2s ease, color 0.2s ease",
        "textDecoration": "none",
        "color": "#585858",
        "borderBottom": "dotted 1px rgba(88, 88, 88, 0.5)"
    },
    "abbr": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "acronym": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "address": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "big": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "cite": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "code": {
        "marginTop": 0,
        "marginRight": 0.25,
        "marginBottom": 0,
        "marginLeft": 0.25,
        "paddingTop": 0.25,
        "paddingRight": 0.65,
        "paddingBottom": 0.25,
        "paddingLeft": 0.65,
        "border": "solid 1px #c9c9c9",
        "fontSize": 0.9,
        "font": "inherit",
        "verticalAlign": "baseline",
        "background": "rgba(144, 144, 144, 0.075)",
        "borderRadius": 4,
        "fontFamily": "\"Courier New\", monospace"
    },
    "del": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "dfn": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "em": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "fontStyle": "italic"
    },
    "img": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "ins": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "kbd": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "q": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "quotes": "none"
    },
    "s": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "samp": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "small": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "strike": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "strong": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "fontWeight": "900"
    },
    "sub": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": 0.8,
        "font": "inherit",
        "verticalAlign": "baseline",
        "position": "relative",
        "top": 0.5
    },
    "sup": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": 0.8,
        "font": "inherit",
        "verticalAlign": "baseline",
        "position": "relative",
        "top": -0.5
    },
    "tt": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "var": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "b": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "fontWeight": "900"
    },
    "u": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "i": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "fontStyle": "italic"
    },
    "center": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "dl": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "dt": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "dd": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "ol": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 1.25,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "listStyle": "decimal"
    },
    "ul": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "listStyle": "disc"
    },
    "li": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "fieldset": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "form": {
        "marginTop": -1,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "label": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": 0.9,
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block",
        "fontWeight": "900"
    },
    "legend": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "table": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "borderCollapse": "collapse",
        "borderSpacing": 0,
        "width": "100%"
    },
    "caption": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "tbody": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "tfoot": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "thead": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "tr": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "th": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "td": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "article": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "aside": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "canvas": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "details": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "embed": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "figure": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "figcaption": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "footer": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 6,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block",
        "backgroundColor": "#f6f6f6"
    },
    "header": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 8,
        "paddingRight": 0,
        "paddingBottom": 0.1,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "hgroup": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "menu": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block",
        "MozTransform": "translateX(22em)",
        "WebkitTransform": "translateX(22em)",
        "MsTransform": "translateX(22em)",
        "transform": "translateX(22em)",
        "MozTransition": "-moz-transform 0.45s ease, visibility 0.45s",
        "WebkitTransition": "-webkit-transform 0.45s ease, visibility 0.45s",
        "MsTransition": "-ms-transform 0.45s ease, visibility 0.45s",
        "transition": "transform 0.45s ease, visibility 0.45s",
        "position": "fixed",
        "top": 0,
        "right": 0,
        "width": 22,
        "maxWidth": "80%",
        "height": "100%",
        "WebkitOverflowScrolling": "touch",
        "background": "#585858",
        "color": "#ffffff",
        "cursor": "default",
        "visibility": "hidden",
        "zIndex": 10002
    },
    "nav": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "output": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "ruby": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "section": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "summary": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "time": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "mark": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "audio": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "video": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "blockquote:before": {
        "content": "none"
    },
    "blockquote:after": {
        "content": "none"
    },
    "q:before": {
        "content": "none"
    },
    "q:after": {
        "content": "none"
    },
    "*": {
        "MozBoxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "*:before": {
        "MozBoxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "*:after": {
        "MozBoxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "row": {
        "borderBottom": "solid 1px transparent",
        "MozBoxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "boxSizing": "border-box",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -2
    },
    "row > *": {
        "float": "left",
        "MozBoxSizing": "border-box",
        "WebkitBoxSizing": "border-box",
        "boxSizing": "border-box",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 2
    },
    "row:after": {
        "content": "''",
        "display": "block",
        "clear": "both",
        "height": 0
    },
    "row:before": {
        "content": "''",
        "display": "block",
        "clear": "both",
        "height": 0
    },
    "rowuniform > * > :first-child": {
        "marginTop": 0
    },
    "rowuniform > * > :last-child": {
        "marginBottom": 0
    },
    "row\\30 \\25 > *": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "row\\30 \\25": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": 0
    },
    "rowuniform\\30 \\25 > *": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "rowuniform\\30 \\25": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": 0
    },
    "rowuniform > *": {
        "paddingTop": 2,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 2
    },
    "rowuniform": {
        "marginTop": -2,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -2
    },
    "row\\32 00\\25 > *": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 4
    },
    "row\\32 00\\25": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -4
    },
    "rowuniform\\32 00\\25 > *": {
        "paddingTop": 4,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 4
    },
    "rowuniform\\32 00\\25": {
        "marginTop": -4,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -4
    },
    "row\\31 50\\25 > *": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 3
    },
    "row\\31 50\\25": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -3
    },
    "rowuniform\\31 50\\25 > *": {
        "paddingTop": 3,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 3
    },
    "rowuniform\\31 50\\25": {
        "marginTop": -3,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -3
    },
    "row\\35 0\\25 > *": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 1
    },
    "row\\35 0\\25": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -1
    },
    "rowuniform\\35 0\\25 > *": {
        "paddingTop": 1,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 1
    },
    "rowuniform\\35 0\\25": {
        "marginTop": -1,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -1
    },
    "row\\32 5\\25 > *": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0.5
    },
    "row\\32 5\\25": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -0.5
    },
    "rowuniform\\32 5\\25 > *": {
        "paddingTop": 0.5,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0.5
    },
    "rowuniform\\32 5\\25": {
        "marginTop": -0.5,
        "marginRight": 0,
        "marginBottom": -1,
        "marginLeft": -0.5
    },
    "\\31 2u": {
        "width": "100%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\31 2u\\24": {
        "width": "100%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\31 1u": {
        "width": "91.6666666667%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\31 1u\\24": {
        "width": "91.6666666667%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\31 0u": {
        "width": "83.3333333333%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\31 0u\\24": {
        "width": "83.3333333333%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\39 u": {
        "width": "75%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\39 u\\24": {
        "width": "75%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\38 u": {
        "width": "66.6666666667%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\38 u\\24": {
        "width": "66.6666666667%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\37 u": {
        "width": "58.3333333333%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\37 u\\24": {
        "width": "58.3333333333%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\36 u": {
        "width": "50%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\36 u\\24": {
        "width": "50%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\35 u": {
        "width": "41.6666666667%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\35 u\\24": {
        "width": "41.6666666667%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\34 u": {
        "width": "33.3333333333%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\34 u\\24": {
        "width": "33.3333333333%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\33 u": {
        "width": "25%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\33 u\\24": {
        "width": "25%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\32 u": {
        "width": "16.6666666667%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\32 u\\24": {
        "width": "16.6666666667%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\31 u": {
        "width": "8.3333333333%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\31 u\\24": {
        "width": "8.3333333333%",
        "clear": "none",
        "marginLeft": 0
    },
    "\\31 2u\\24 + *": {
        "clear": "left"
    },
    "\\31 1u\\24 + *": {
        "clear": "left"
    },
    "\\31 0u\\24 + *": {
        "clear": "left"
    },
    "\\39 u\\24 + *": {
        "clear": "left"
    },
    "\\38 u\\24 + *": {
        "clear": "left"
    },
    "\\37 u\\24 + *": {
        "clear": "left"
    },
    "\\36 u\\24 + *": {
        "clear": "left"
    },
    "\\35 u\\24 + *": {
        "clear": "left"
    },
    "\\34 u\\24 + *": {
        "clear": "left"
    },
    "\\33 u\\24 + *": {
        "clear": "left"
    },
    "\\32 u\\24 + *": {
        "clear": "left"
    },
    "\\31 u\\24 + *": {
        "clear": "left"
    },
    "\\-11u": {
        "marginLeft": "91.66667%"
    },
    "\\-10u": {
        "marginLeft": "83.33333%"
    },
    "\\-9u": {
        "marginLeft": "75%"
    },
    "\\-8u": {
        "marginLeft": "66.66667%"
    },
    "\\-7u": {
        "marginLeft": "58.33333%"
    },
    "\\-6u": {
        "marginLeft": "50%"
    },
    "\\-5u": {
        "marginLeft": "41.66667%"
    },
    "\\-4u": {
        "marginLeft": "33.33333%"
    },
    "\\-3u": {
        "marginLeft": "25%"
    },
    "\\-2u": {
        "marginLeft": "16.66667%"
    },
    "\\-1u": {
        "marginLeft": "8.33333%"
    },
    "@-ms-viewport": {
        "width": "device-width"
    },
    "bodyis-loading *": {
        "MozAnimation": "none !important",
        "WebkitAnimation": "none !important",
        "MsAnimation": "none !important",
        "animation": "none !important",
        "MozTransition": "none !important",
        "WebkitTransition": "none !important",
        "MsTransition": "none !important",
        "transition": "none !important"
    },
    "bodyis-loading *:before": {
        "MozAnimation": "none !important",
        "WebkitAnimation": "none !important",
        "MsAnimation": "none !important",
        "animation": "none !important",
        "MozTransition": "none !important",
        "WebkitTransition": "none !important",
        "MsTransition": "none !important",
        "transition": "none !important"
    },
    "bodyis-loading *:after": {
        "MozAnimation": "none !important",
        "WebkitAnimation": "none !important",
        "MsAnimation": "none !important",
        "animation": "none !important",
        "MozTransition": "none !important",
        "WebkitTransition": "none !important",
        "MsTransition": "none !important",
        "transition": "none !important"
    },
    "input": {
        "color": "#585858",
        "fontFamily": "\"Source Sans Pro\", Helvetica, sans-serif",
        "fontSize": "16pt",
        "fontWeight": "300",
        "lineHeight": 1.75
    },
    "select": {
        "color": "inherit",
        "fontFamily": "\"Source Sans Pro\", Helvetica, sans-serif",
        "fontSize": "16pt",
        "fontWeight": "300",
        "lineHeight": 1.75,
        "MozAppearance": "none",
        "WebkitAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "backgroundColor": "transparent",
        "border": "none",
        "borderRadius": 0,
        "borderBottom": "solid 1px #c9c9c9",
        "display": "block",
        "outline": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "textDecoration": "none",
        "width": "100%",
        "height": 3
    },
    "textarea": {
        "color": "inherit",
        "fontFamily": "\"Source Sans Pro\", Helvetica, sans-serif",
        "fontSize": "16pt",
        "fontWeight": "300",
        "lineHeight": 1.75,
        "MozAppearance": "none",
        "WebkitAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "backgroundColor": "transparent",
        "border": "none",
        "borderRadius": 0,
        "borderBottom": "solid 1px #c9c9c9",
        "display": "block",
        "outline": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "textDecoration": "none",
        "width": "100%",
        "minHeight": 3.75
    },
    "a:hover": {
        "borderBottomColor": "transparent",
        "color": "#f2849e !important"
    },
    "about": {
        "marginTop": 2,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0
    },
    "h1 a": {
        "color": "inherit"
    },
    "education-title": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0.7,
        "marginLeft": 0
    },
    "education-subtitle": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0.7,
        "marginLeft": 0
    },
    "h2 a": {
        "color": "inherit"
    },
    "h3 a": {
        "color": "inherit"
    },
    "h4 a": {
        "color": "inherit"
    },
    "h5 a": {
        "color": "inherit"
    },
    "h6 a": {
        "color": "inherit"
    },
    "pre code": {
        "display": "block",
        "lineHeight": 1.75,
        "paddingTop": 1,
        "paddingRight": 1.5,
        "paddingBottom": 1,
        "paddingLeft": 1.5,
        "overflowX": "auto"
    },
    "hr": {
        "border": 0,
        "borderBottom": "solid 1px #c9c9c9",
        "marginTop": 2,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0
    },
    "hrmajor": {
        "marginTop": 3,
        "marginRight": 0,
        "marginBottom": 3,
        "marginLeft": 0
    },
    "align-left": {
        "textAlign": "left"
    },
    "align-center": {
        "textAlign": "center"
    },
    "align-right": {
        "textAlign": "right"
    },
    "sectionspecial": {
        "textAlign": "center"
    },
    "articlespecial": {
        "textAlign": "center"
    },
    "header p": {
        "marginTop": -1
    },
    "icon": {
        "textDecoration": "none",
        "borderBottom": "none",
        "position": "relative"
    },
    "icon:before": {
        "MozOsxFontSmoothing": "grayscale",
        "WebkitFontSmoothing": "antialiased",
        "fontFamily": "FontAwesome",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "textTransform": "none !important"
    },
    "icon > label": {
        "display": "none"
    },
    "iconstyle2": {
        "MozTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out",
        "WebkitTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out",
        "MsTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out",
        "transition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out",
        "backgroundColor": "transparent",
        "border": "solid 1px #c9c9c9",
        "borderRadius": 4,
        "width": 2.65,
        "height": 2.65,
        "display": "inline-block",
        "textAlign": "center",
        "lineHeight": 2.65,
        "color": "inherit"
    },
    "iconstyle2:before": {
        "fontSize": 1.1
    },
    "iconstyle2:hover": {
        "color": "#f2849e",
        "borderColor": "#f2849e"
    },
    "iconstyle2:active": {
        "backgroundColor": "rgba(242, 132, 158, 0.1)"
    },
    "ol li": {
        "paddingLeft": 0.25
    },
    "ul li": {
        "paddingLeft": 0.5
    },
    "ulalt": {
        "listStyle": "none",
        "paddingLeft": 0
    },
    "ulalt li": {
        "borderTop": "solid 1px #c9c9c9",
        "paddingTop": 0.5,
        "paddingRight": 0,
        "paddingBottom": 0.5,
        "paddingLeft": 0
    },
    "ulalt li:first-child": {
        "borderTop": 0,
        "paddingTop": 0
    },
    "ulicons": {
        "cursor": "default",
        "listStyle": "none",
        "paddingLeft": 0,
        "marginTop": -1,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": -1
    },
    "ulicons li": {
        "display": "inline-block",
        "paddingTop": 1,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 1
    },
    "ulactions": {
        "cursor": "default",
        "listStyle": "none",
        "paddingLeft": 0
    },
    "ulactions li": {
        "display": "inline-block",
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "verticalAlign": "middle"
    },
    "ulactions li:last-child": {
        "paddingRight": 0
    },
    "ulactionssmall li": {
        "paddingTop": 0,
        "paddingRight": 0.5,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "ulactionsvertical li": {
        "display": "block",
        "paddingTop": 1,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "ulactionsvertical li:first-child": {
        "paddingTop": 0
    },
    "ulactionsvertical li > *": {
        "marginBottom": 0
    },
    "ulactionsverticalsmall li": {
        "paddingTop": 0.5,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "ulactionsverticalsmall li:first-child": {
        "paddingTop": 0
    },
    "ulactionsfit": {
        "display": "table",
        "marginLeft": -1,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "tableLayout": "fixed",
        "width": "calc(100% + 1em)"
    },
    "ulactionsfit li": {
        "display": "table-cell",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 1
    },
    "ulactionsfit li > *": {
        "marginBottom": 0
    },
    "ulactionsfitsmall": {
        "marginLeft": -0.5,
        "width": "calc(100% + 0.5em)"
    },
    "ulactionsfitsmall li": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0.5
    },
    "dl dt": {
        "display": "block",
        "fontWeight": "900",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0
    },
    "dl dd": {
        "marginLeft": 2
    },
    "form:after": {
        "content": "''",
        "display": "block",
        "clear": "both",
        "height": 1
    },
    "form field": {
        "position": "relative",
        "float": "left",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 1.3,
        "marginLeft": 0,
        "verticalAlign": "top",
        "width": "100%"
    },
    "form half": {
        "width": "calc(50% + 1em) !important",
        "paddingLeft": 2
    },
    "form halffirst": {
        "width": "calc(50% - 1em) !important",
        "paddingLeft": 0
    },
    "form :last-child": {
        "marginBottom": 0
    },
    "form half:nth-last-child(2)": {
        "marginBottom": 0
    },
    "form actions": {
        "position": "relative",
        "clear": "both",
        "paddingTop": 1
    },
    "input[type=\"text\"]": {
        "MozAppearance": "none",
        "WebkitAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "backgroundColor": "transparent",
        "border": "none",
        "borderRadius": 0,
        "borderBottom": "solid 1px #c9c9c9",
        "color": "inherit",
        "display": "block",
        "outline": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "textDecoration": "none",
        "width": "100%",
        "height": 3
    },
    "input[type=\"password\"]": {
        "MozAppearance": "none",
        "WebkitAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "backgroundColor": "transparent",
        "border": "none",
        "borderRadius": 0,
        "borderBottom": "solid 1px #c9c9c9",
        "color": "inherit",
        "display": "block",
        "outline": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "textDecoration": "none",
        "width": "100%",
        "height": 3
    },
    "input[type=\"email\"]": {
        "MozAppearance": "none",
        "WebkitAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "backgroundColor": "transparent",
        "border": "none",
        "borderRadius": 0,
        "borderBottom": "solid 1px #c9c9c9",
        "color": "inherit",
        "display": "block",
        "outline": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "textDecoration": "none",
        "width": "100%",
        "height": 3
    },
    "input[type=\"tel\"]": {
        "MozAppearance": "none",
        "WebkitAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "backgroundColor": "transparent",
        "border": "none",
        "borderRadius": 0,
        "borderBottom": "solid 1px #c9c9c9",
        "color": "inherit",
        "display": "block",
        "outline": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "textDecoration": "none",
        "width": "100%"
    },
    "input[type=\"text\"]:invalid": {
        "boxShadow": "none"
    },
    "input[type=\"password\"]:invalid": {
        "boxShadow": "none"
    },
    "input[type=\"email\"]:invalid": {
        "boxShadow": "none"
    },
    "input[type=\"tel\"]:invalid": {
        "boxShadow": "none"
    },
    "select:invalid": {
        "boxShadow": "none"
    },
    "textarea:invalid": {
        "boxShadow": "none"
    },
    "input[type=\"text\"]:focus": {
        "borderBottomColor": "#f2849e",
        "boxShadow": "inset 0 -1px 0 0 #f2849e"
    },
    "input[type=\"password\"]:focus": {
        "borderBottomColor": "#f2849e",
        "boxShadow": "inset 0 -1px 0 0 #f2849e"
    },
    "input[type=\"email\"]:focus": {
        "borderBottomColor": "#f2849e",
        "boxShadow": "inset 0 -1px 0 0 #f2849e"
    },
    "input[type=\"tel\"]:focus": {
        "borderBottomColor": "#f2849e",
        "boxShadow": "inset 0 -1px 0 0 #f2849e"
    },
    "select:focus": {
        "borderBottomColor": "#f2849e",
        "boxShadow": "inset 0 -1px 0 0 #f2849e"
    },
    "textarea:focus": {
        "borderBottomColor": "#f2849e",
        "boxShadow": "inset 0 -1px 0 0 #f2849e"
    },
    "select-wrapper": {
        "textDecoration": "none",
        "display": "block",
        "position": "relative"
    },
    "select-wrapper:before": {
        "MozOsxFontSmoothing": "grayscale",
        "WebkitFontSmoothing": "antialiased",
        "fontFamily": "FontAwesome",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "textTransform": "none !important",
        "color": "#c9c9c9",
        "content": "'\\f078'",
        "display": "block",
        "height": 3,
        "lineHeight": 3,
        "pointerEvents": "none",
        "position": "absolute",
        "right": 0,
        "textAlign": "center",
        "top": 0,
        "width": 3
    },
    "select-wrapper select::-ms-expand": {
        "display": "none"
    },
    "input[type=\"checkbox\"]": {
        "MozAppearance": "none",
        "WebkitAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "display": "block",
        "float": "left",
        "marginRight": -2,
        "opacity": 0,
        "width": 1,
        "zIndex": -1
    },
    "input[type=\"radio\"]": {
        "MozAppearance": "none",
        "WebkitAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "display": "block",
        "float": "left",
        "marginRight": -2,
        "opacity": 0,
        "width": 1,
        "zIndex": -1
    },
    "input[type=\"checkbox\"] + label": {
        "textDecoration": "none",
        "color": "#585858",
        "cursor": "pointer",
        "display": "inline-block",
        "fontSize": 1,
        "fontWeight": "300",
        "paddingLeft": 2.55,
        "paddingRight": 0.75,
        "position": "relative"
    },
    "input[type=\"radio\"] + label": {
        "textDecoration": "none",
        "color": "#585858",
        "cursor": "pointer",
        "display": "inline-block",
        "fontSize": 1,
        "fontWeight": "300",
        "paddingLeft": 2.55,
        "paddingRight": 0.75,
        "position": "relative"
    },
    "input[type=\"checkbox\"] + label:before": {
        "MozOsxFontSmoothing": "grayscale",
        "WebkitFontSmoothing": "antialiased",
        "fontFamily": "FontAwesome",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "textTransform": "none !important",
        "borderRadius": 4,
        "border": "solid 1px #c9c9c9",
        "content": "''",
        "display": "inline-block",
        "height": 1.8,
        "left": 0,
        "lineHeight": 1.725,
        "position": "absolute",
        "textAlign": "center",
        "top": 0,
        "width": 1.8
    },
    "input[type=\"radio\"] + label:before": {
        "MozOsxFontSmoothing": "grayscale",
        "WebkitFontSmoothing": "antialiased",
        "fontFamily": "FontAwesome",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "textTransform": "none !important",
        "borderRadius": "100%",
        "border": "solid 1px #c9c9c9",
        "content": "''",
        "display": "inline-block",
        "height": 1.8,
        "left": 0,
        "lineHeight": 1.725,
        "position": "absolute",
        "textAlign": "center",
        "top": 0,
        "width": 1.8
    },
    "input[type=\"checkbox\"]:checked + label:before": {
        "background": "#585858",
        "borderColor": "#585858",
        "color": "#ffffff",
        "content": "'\\f00c'"
    },
    "input[type=\"radio\"]:checked + label:before": {
        "background": "#585858",
        "borderColor": "#585858",
        "color": "#ffffff",
        "content": "'\\f00c'"
    },
    "input[type=\"checkbox\"]:focus + label:before": {
        "borderColor": "#f2849e",
        "boxShadow": "0 0 0 1px #f2849e"
    },
    "input[type=\"radio\"]:focus + label:before": {
        "borderColor": "#f2849e",
        "boxShadow": "0 0 0 1px #f2849e"
    },
    "box": {
        "borderRadius": 4,
        "border": "solid 1px #c9c9c9",
        "marginBottom": 2,
        "paddingTop": 1.5,
        "paddingRight": 1.5,
        "paddingBottom": 1.5,
        "paddingLeft": 1.5
    },
    "box > :last-child": {
        "marginBottom": 0
    },
    "box > :last-child > :last-child": {
        "marginBottom": 0
    },
    "box > :last-child > :last-child > :last-child": {
        "marginBottom": 0
    },
    "boxalt": {
        "border": 0,
        "borderRadius": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "image": {
        "borderRadius": 4,
        "border": 0,
        "display": "inline-block",
        "position": "relative"
    },
    "image img": {
        "borderRadius": 4,
        "display": "block"
    },
    "imageleft": {
        "maxWidth": "40%",
        "float": "left",
        "paddingTop": 0,
        "paddingRight": 1.5,
        "paddingBottom": 1,
        "paddingLeft": 0,
        "top": 0.25
    },
    "imageright": {
        "maxWidth": "40%",
        "float": "right",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 1,
        "paddingLeft": 1.5,
        "top": 0.25
    },
    "imageleft img": {
        "width": "100%"
    },
    "imageright img": {
        "width": "100%"
    },
    "imagefit": {
        "display": "block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0,
        "width": "100%"
    },
    "imagefit img": {
        "width": "100%"
    },
    "imagemain": {
        "display": "block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 3,
        "marginLeft": 0,
        "width": "100%"
    },
    "imagemain img": {
        "width": "100%"
    },
    "table-wrapper": {
        "WebkitOverflowScrolling": "touch",
        "overflowX": "auto"
    },
    "table tbody tr": {
        "border": "solid 1px #c9c9c9",
        "borderLeft": 0,
        "borderRight": 0
    },
    "table tbody tr:nth-child(2n + 1)": {
        "backgroundColor": "rgba(144, 144, 144, 0.075)"
    },
    "table td": {
        "paddingTop": 0.75,
        "paddingRight": 0.75,
        "paddingBottom": 0.75,
        "paddingLeft": 0.75
    },
    "table th": {
        "fontSize": 0.9,
        "fontWeight": "900",
        "paddingTop": 0,
        "paddingRight": 0.75,
        "paddingBottom": 0.75,
        "paddingLeft": 0.75,
        "textAlign": "left"
    },
    "table thead": {
        "borderBottom": "solid 2px #c9c9c9"
    },
    "table tfoot": {
        "borderTop": "solid 2px #c9c9c9"
    },
    "tablealt": {
        "borderCollapse": "separate"
    },
    "tablealt tbody tr td": {
        "border": "solid 1px #c9c9c9",
        "borderLeftWidth": 0,
        "borderTopWidth": 0
    },
    "tablealt tbody tr td:first-child": {
        "borderLeftWidth": 1
    },
    "tablealt tbody tr:first-child td": {
        "borderTopWidth": 1
    },
    "tablealt thead": {
        "borderBottom": 0
    },
    "tablealt tfoot": {
        "borderTop": 0
    },
    "input[type=\"submit\"]": {
        "MozAppearance": "none",
        "WebkitAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "MozTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        "WebkitTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        "MsTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        "transition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        "backgroundColor": "transparent",
        "borderRadius": 4,
        "border": 0,
        "boxShadow": "inset 0 0 0 2px #585858",
        "color": "#585858 !important",
        "cursor": "pointer",
        "display": "inline-block",
        "fontSize": 0.8,
        "fontWeight": "900",
        "height": 3.5,
        "letterSpacing": 0.35,
        "lineHeight": 3.45,
        "overflow": "hidden",
        "paddingTop": 0,
        "paddingRight": 1.25,
        "paddingBottom": 0,
        "paddingLeft": 1.6,
        "textAlign": "center",
        "textDecoration": "none",
        "textOverflow": "ellipsis",
        "textTransform": "uppercase",
        "whiteSpace": "nowrap"
    },
    "input[type=\"reset\"]": {
        "MozAppearance": "none",
        "WebkitAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "MozTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        "WebkitTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        "MsTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        "transition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        "backgroundColor": "transparent",
        "borderRadius": 4,
        "border": 0,
        "boxShadow": "inset 0 0 0 2px #585858",
        "color": "#585858 !important",
        "cursor": "pointer",
        "display": "inline-block",
        "fontSize": 0.8,
        "fontWeight": "900",
        "height": 3.5,
        "letterSpacing": 0.35,
        "lineHeight": 3.45,
        "overflow": "hidden",
        "paddingTop": 0,
        "paddingRight": 1.25,
        "paddingBottom": 0,
        "paddingLeft": 1.6,
        "textAlign": "center",
        "textDecoration": "none",
        "textOverflow": "ellipsis",
        "textTransform": "uppercase",
        "whiteSpace": "nowrap"
    },
    "input[type=\"button\"]": {
        "MozAppearance": "none",
        "WebkitAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "MozTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        "WebkitTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        "MsTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        "transition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        "backgroundColor": "transparent",
        "borderRadius": 4,
        "border": 0,
        "boxShadow": "inset 0 0 0 2px #585858",
        "color": "#585858 !important",
        "cursor": "pointer",
        "display": "inline-block",
        "fontSize": 0.8,
        "fontWeight": "900",
        "height": 3.5,
        "letterSpacing": 0.35,
        "lineHeight": 3.45,
        "overflow": "hidden",
        "paddingTop": 0,
        "paddingRight": 1.25,
        "paddingBottom": 0,
        "paddingLeft": 1.6,
        "textAlign": "center",
        "textDecoration": "none",
        "textOverflow": "ellipsis",
        "textTransform": "uppercase",
        "whiteSpace": "nowrap"
    },
    "button": {
        "MozAppearance": "none",
        "WebkitAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "MozTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        "WebkitTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        "MsTransition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        "transition": "background-color 0.2s ease-in-out, color 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        "backgroundColor": "transparent",
        "borderRadius": 4,
        "border": 0,
        "boxShadow": "inset 0 0 0 2px #585858",
        "color": "#585858 !important",
        "cursor": "pointer",
        "display": "inline-block",
        "fontSize": 0.8,
        "fontWeight": "900",
        "height": 3.5,
        "letterSpacing": 0.35,
        "lineHeight": 3.45,
        "overflow": "hidden",
        "paddingTop": 0,
        "paddingRight": 1.25,
        "paddingBottom": 0,
        "paddingLeft": 1.6,
        "textAlign": "center",
        "textDecoration": "none",
        "textOverflow": "ellipsis",
        "textTransform": "uppercase",
        "whiteSpace": "nowrap"
    },
    "input[type=\"submit\"]icon:before": {
        "marginRight": 0.5
    },
    "input[type=\"reset\"]icon:before": {
        "marginRight": 0.5
    },
    "input[type=\"button\"]icon:before": {
        "marginRight": 0.5
    },
    "buttonicon:before": {
        "marginRight": 0.5
    },
    "input[type=\"submit\"]fit": {
        "display": "block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "width": "100%"
    },
    "input[type=\"reset\"]fit": {
        "display": "block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "width": "100%"
    },
    "input[type=\"button\"]fit": {
        "display": "block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "width": "100%"
    },
    "buttonfit": {
        "display": "block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "width": "100%"
    },
    "input[type=\"submit\"]:hover": {
        "color": "#f2849e !important",
        "boxShadow": "inset 0 0 0 2px #f2849e"
    },
    "input[type=\"reset\"]:hover": {
        "color": "#f2849e !important",
        "boxShadow": "inset 0 0 0 2px #f2849e"
    },
    "input[type=\"button\"]:hover": {
        "color": "#f2849e !important",
        "boxShadow": "inset 0 0 0 2px #f2849e"
    },
    "button:hover": {
        "color": "#f2849e !important",
        "boxShadow": "inset 0 0 0 2px #f2849e"
    },
    "input[type=\"submit\"]:active": {
        "backgroundColor": "rgba(242, 132, 158, 0.1)"
    },
    "input[type=\"reset\"]:active": {
        "backgroundColor": "rgba(242, 132, 158, 0.1)"
    },
    "input[type=\"button\"]:active": {
        "backgroundColor": "rgba(242, 132, 158, 0.1)"
    },
    "button:active": {
        "backgroundColor": "rgba(242, 132, 158, 0.1)"
    },
    "input[type=\"submit\"]small": {
        "fontSize": 0.6
    },
    "input[type=\"reset\"]small": {
        "fontSize": 0.6
    },
    "input[type=\"button\"]small": {
        "fontSize": 0.6
    },
    "buttonsmall": {
        "fontSize": 0.6
    },
    "input[type=\"submit\"]big": {
        "fontSize": 1
    },
    "input[type=\"reset\"]big": {
        "fontSize": 1
    },
    "input[type=\"button\"]big": {
        "fontSize": 1
    },
    "buttonbig": {
        "fontSize": 1
    },
    "input[type=\"submit\"]special": {
        "boxShadow": "none",
        "backgroundColor": "#585858",
        "color": "#ffffff !important"
    },
    "input[type=\"reset\"]special": {
        "boxShadow": "none",
        "backgroundColor": "#585858",
        "color": "#ffffff !important"
    },
    "input[type=\"button\"]special": {
        "boxShadow": "none",
        "backgroundColor": "#585858",
        "color": "#ffffff !important"
    },
    "buttonspecial": {
        "boxShadow": "none",
        "backgroundColor": "#585858",
        "color": "#ffffff !important"
    },
    "input[type=\"submit\"]special:hover": {
        "backgroundColor": "#f2849e"
    },
    "input[type=\"reset\"]special:hover": {
        "backgroundColor": "#f2849e"
    },
    "input[type=\"button\"]special:hover": {
        "backgroundColor": "#f2849e"
    },
    "buttonspecial:hover": {
        "backgroundColor": "#f2849e"
    },
    "input[type=\"submit\"]special:active": {
        "backgroundColor": "#ee5f81"
    },
    "input[type=\"reset\"]special:active": {
        "backgroundColor": "#ee5f81"
    },
    "input[type=\"button\"]special:active": {
        "backgroundColor": "#ee5f81"
    },
    "buttonspecial:active": {
        "backgroundColor": "#ee5f81"
    },
    "input[type=\"submit\"]disabled": {
        "MozPointerEvents": "none",
        "WebkitPointerEvents": "none",
        "MsPointerEvents": "none",
        "pointerEvents": "none",
        "opacity": 0.25
    },
    "input[type=\"submit\"]:disabled": {
        "MozPointerEvents": "none",
        "WebkitPointerEvents": "none",
        "MsPointerEvents": "none",
        "pointerEvents": "none",
        "opacity": 0.25
    },
    "input[type=\"reset\"]disabled": {
        "MozPointerEvents": "none",
        "WebkitPointerEvents": "none",
        "MsPointerEvents": "none",
        "pointerEvents": "none",
        "opacity": 0.25
    },
    "input[type=\"reset\"]:disabled": {
        "MozPointerEvents": "none",
        "WebkitPointerEvents": "none",
        "MsPointerEvents": "none",
        "pointerEvents": "none",
        "opacity": 0.25
    },
    "input[type=\"button\"]disabled": {
        "MozPointerEvents": "none",
        "WebkitPointerEvents": "none",
        "MsPointerEvents": "none",
        "pointerEvents": "none",
        "opacity": 0.25
    },
    "input[type=\"button\"]:disabled": {
        "MozPointerEvents": "none",
        "WebkitPointerEvents": "none",
        "MsPointerEvents": "none",
        "pointerEvents": "none",
        "opacity": 0.25
    },
    "buttondisabled": {
        "MozPointerEvents": "none",
        "WebkitPointerEvents": "none",
        "MsPointerEvents": "none",
        "pointerEvents": "none",
        "opacity": 0.25
    },
    "button:disabled": {
        "MozPointerEvents": "none",
        "WebkitPointerEvents": "none",
        "MsPointerEvents": "none",
        "pointerEvents": "none",
        "opacity": 0.25
    },
    "tiles": {
        "display": "flex",
        "MozFlexWrap": "wrap",
        "WebkitFlexWrap": "wrap",
        "MsFlexWrap": "wrap",
        "flexWrap": "wrap",
        "postiion": "relative",
        "marginTop": -2.5,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": -2.5
    },
    "tiles article": {
        "MozTransition": "-moz-transform 0.5s ease, opacity 0.5s ease",
        "WebkitTransition": "-webkit-transform 0.5s ease, opacity 0.5s ease",
        "MsTransition": "-ms-transform 0.5s ease, opacity 0.5s ease",
        "transition": "transform 0.5s ease, opacity 0.5s ease",
        "position": "relative",
        "width": "calc(33.33333% - 2.5em)",
        "marginTop": 2.5,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 2.5
    },
    "tiles article > image": {
        "MozTransition": "-moz-transform 0.5s ease",
        "WebkitTransition": "-webkit-transform 0.5s ease",
        "MsTransition": "-ms-transform 0.5s ease",
        "transition": "transform 0.5s ease",
        "position": "relative",
        "display": "block",
        "width": "100%",
        "borderRadius": 4,
        "overflow": "hidden"
    },
    "tiles article > image img": {
        "display": "block",
        "width": "100%"
    },
    "tiles article > image:before": {
        "MozPointerEvents": "none",
        "WebkitPointerEvents": "none",
        "MsPointerEvents": "none",
        "pointerEvents": "none",
        "MozTransition": "background-color 0.5s ease, opacity 0.5s ease",
        "WebkitTransition": "background-color 0.5s ease, opacity 0.5s ease",
        "MsTransition": "background-color 0.5s ease, opacity 0.5s ease",
        "transition": "background-color 0.5s ease, opacity 0.5s ease",
        "content": "''",
        "display": "block",
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "opacity": 0.8,
        "zIndex": 1
    },
    "tiles article > image:after": {
        "MozPointerEvents": "none",
        "WebkitPointerEvents": "none",
        "MsPointerEvents": "none",
        "pointerEvents": "none",
        "MozTransition": "opacity 0.5s ease",
        "WebkitTransition": "opacity 0.5s ease",
        "MsTransition": "opacity 0.5s ease",
        "transition": "opacity 0.5s ease",
        "content": "''",
        "display": "block",
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "backgroundPosition": "center",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "100% 100%",
        "opacity": 0.25,
        "zIndex": 2
    },
    "tiles article > a": {
        "display": "flex",
        "MozFlexDirection": "column",
        "WebkitFlexDirection": "column",
        "MsFlexDirection": "column",
        "flexDirection": "column",
        "MozAlignItems": "center",
        "WebkitAlignItems": "center",
        "MsAlignItems": "center",
        "alignItems": "center",
        "MozJustifyContent": "center",
        "WebkitJustifyContent": "center",
        "MsJustifyContent": "center",
        "justifyContent": "center",
        "MozTransition": "background-color 0.5s ease, -moz-transform 0.5s ease",
        "WebkitTransition": "background-color 0.5s ease, -webkit-transform 0.5s ease",
        "MsTransition": "background-color 0.5s ease, -ms-transform 0.5s ease",
        "transition": "background-color 0.5s ease, transform 0.5s ease",
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "paddingTop": 1,
        "paddingRight": 1,
        "paddingBottom": 1,
        "paddingLeft": 1,
        "borderRadius": 4,
        "borderBottom": 0,
        "color": "#ffffff",
        "textAlign": "center",
        "textDecoration": "none",
        "zIndex": 3
    },
    "tiles article > a > :last-child": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "tiles article > a:hover": {
        "color": "#ffffff !important"
    },
    "tiles article > a h2": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "tiles article > a content": {
        "MozTransition": "max-height 0.5s ease, opacity 0.5s ease",
        "WebkitTransition": "max-height 0.5s ease, opacity 0.5s ease",
        "MsTransition": "max-height 0.5s ease, opacity 0.5s ease",
        "transition": "max-height 0.5s ease, opacity 0.5s ease",
        "width": "100%",
        "maxHeight": 0,
        "lineHeight": 1.5,
        "marginTop": 0.35,
        "opacity": 0
    },
    "tiles article > a content > :last-child": {
        "marginBottom": 0
    },
    "tiles articlestyle1 > image:before": {
        "backgroundColor": "#f2849e"
    },
    "tiles articlestyle2 > image:before": {
        "backgroundColor": "#7ecaf6"
    },
    "tiles articlestyle3 > image:before": {
        "backgroundColor": "#7bd0c1"
    },
    "tiles articlestyle4 > image:before": {
        "backgroundColor": "#c75b9b"
    },
    "tiles articlestyle5 > image:before": {
        "backgroundColor": "#ae85ca"
    },
    "tiles articlestyle6 > image:before": {
        "backgroundColor": "#8499e7"
    },
    "tiles articlestyle7 > image:before": {
        "backgroundColor": "#161616"
    },
    "body:not(is-touch) tiles article:hover > image": {
        "MozTransform": "scale(1.1)",
        "WebkitTransform": "scale(1.1)",
        "MsTransform": "scale(1.1)",
        "transform": "scale(1.1)"
    },
    "body:not(is-touch) tiles article:hover > image:before": {
        "backgroundColor": "#333333",
        "opacity": 0.35
    },
    "body:not(is-touch) tiles article:hover > image:after": {
        "opacity": 0
    },
    "body:not(is-touch) tiles article:hover content": {
        "maxHeight": 15,
        "opacity": 1
    },
    "* + tiles": {
        "marginTop": 2
    },
    "bodyis-loading tiles article": {
        "MozTransform": "scale(0.9)",
        "WebkitTransform": "scale(0.9)",
        "MsTransform": "scale(0.9)",
        "transform": "scale(0.9)",
        "opacity": 0
    },
    "bodyis-touch tiles article content": {
        "maxHeight": 15,
        "opacity": 1
    },
    "header logo": {
        "display": "inline-block",
        "borderBottom": 0,
        "color": "inherit",
        "fontWeight": "900",
        "letterSpacing": 0.35,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2.5,
        "marginLeft": 0,
        "textDecoration": "none",
        "textTransform": "uppercase"
    },
    "header logo > *": {
        "display": "inline-block",
        "verticalAlign": "middle"
    },
    "header logo symbol": {
        "marginRight": 0.65
    },
    "header logo symbol img": {
        "display": "block",
        "width": 2,
        "height": 2
    },
    "header nav": {
        "position": "fixed",
        "right": 2,
        "top": 2,
        "zIndex": 10000
    },
    "header nav ul": {
        "display": "flex",
        "MozAlignItems": "center",
        "WebkitAlignItems": "center",
        "MsAlignItems": "center",
        "alignItems": "center",
        "listStyle": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "header nav ul li": {
        "display": "block",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "header nav ul li a": {
        "display": "block",
        "position": "relative",
        "height": 3,
        "lineHeight": 3,
        "paddingTop": 0,
        "paddingRight": 1.5,
        "paddingBottom": 0,
        "paddingLeft": 1.5,
        "backgroundColor": "rgba(255, 255, 255, 0.5)",
        "borderRadius": 4,
        "border": 0,
        "fontSize": 0.8,
        "fontWeight": "900",
        "letterSpacing": 0.35,
        "textTransform": "uppercase"
    },
    "header nav ul li a[href=\"menu\"]": {
        "WebkitTapHighlightColor": "transparent",
        "width": 4,
        "textIndent": 4,
        "fontSize": 1,
        "overflow": "hidden",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "whiteSpace": "nowrap"
    },
    "header nav ul li a[href=\"menu\"]:before": {
        "MozTransition": "opacity 0.2s ease",
        "WebkitTransition": "opacity 0.2s ease",
        "MsTransition": "opacity 0.2s ease",
        "transition": "opacity 0.2s ease",
        "content": "''",
        "display": "block",
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "backgroundPosition": "center",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "2em 2em",
        "backgroundImage": "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cstyle%3Eline %7B stroke-width: 8px%3B stroke: %23f2849e%3B %7D%3C/style%3E%3Cline x1='0' y1='25' x2='100' y2='25' /%3E%3Cline x1='0' y1='50' x2='100' y2='50' /%3E%3Cline x1='0' y1='75' x2='100' y2='75' /%3E%3C/svg%3E\")",
        "opacity": 0
    },
    "header nav ul li a[href=\"menu\"]:after": {
        "MozTransition": "opacity 0.2s ease",
        "WebkitTransition": "opacity 0.2s ease",
        "MsTransition": "opacity 0.2s ease",
        "transition": "opacity 0.2s ease",
        "content": "''",
        "display": "block",
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "backgroundPosition": "center",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "2em 2em",
        "backgroundImage": "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cstyle%3Eline %7B stroke-width: 8px%3B stroke: %23585858%3B %7D%3C/style%3E%3Cline x1='0' y1='25' x2='100' y2='25' /%3E%3Cline x1='0' y1='50' x2='100' y2='50' /%3E%3Cline x1='0' y1='75' x2='100' y2='75' /%3E%3C/svg%3E\")",
        "opacity": 1
    },
    "header nav ul li a[href=\"menu\"]:hover:before": {
        "opacity": 1
    },
    "header nav ul li a[href=\"menu\"]:hover:after": {
        "opacity": 0
    },
    "wrapper": {
        "MozTransition": "opacity 0.45s ease",
        "WebkitTransition": "opacity 0.45s ease",
        "MsTransition": "opacity 0.45s ease",
        "transition": "opacity 0.45s ease",
        "opacity": 1
    },
    "menu > inner": {
        "MozTransition": "opacity 0.45s ease",
        "WebkitTransition": "opacity 0.45s ease",
        "MsTransition": "opacity 0.45s ease",
        "transition": "opacity 0.45s ease",
        "WebkitOverflowScrolling": "touch",
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "paddingTop": 2.75,
        "paddingRight": 2.75,
        "paddingBottom": 2.75,
        "paddingLeft": 2.75,
        "opacity": 0,
        "overflowY": "auto"
    },
    "menu > inner > ul": {
        "listStyle": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "menu > inner > ul > li": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "borderTop": "solid 1px rgba(255, 255, 255, 0.15)"
    },
    "menu > inner > ul > li a": {
        "display": "block",
        "paddingTop": 1,
        "paddingRight": 0,
        "paddingBottom": 1,
        "paddingLeft": 0,
        "lineHeight": 1.5,
        "border": 0,
        "color": "inherit"
    },
    "menu > inner > ul > li:first-child": {
        "borderTop": 0,
        "marginTop": -1
    },
    "menu > close": {
        "MozTransition": "opacity 0.45s ease, -moz-transform 0.45s ease",
        "WebkitTransition": "opacity 0.45s ease, -webkit-transform 0.45s ease",
        "MsTransition": "opacity 0.45s ease, -ms-transform 0.45s ease",
        "transition": "opacity 0.45s ease, transform 0.45s ease",
        "MozTransform": "scale(0.25) rotate(180deg)",
        "WebkitTransform": "scale(0.25) rotate(180deg)",
        "MsTransform": "scale(0.25) rotate(180deg)",
        "transform": "scale(0.25) rotate(180deg)",
        "WebkitTapHighlightColor": "transparent",
        "display": "block",
        "position": "absolute",
        "top": 2,
        "left": -6,
        "width": 6,
        "textIndent": 6,
        "height": 3,
        "border": 0,
        "fontSize": 1,
        "opacity": 0,
        "overflow": "hidden",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "whiteSpace": "nowrap"
    },
    "menu > close:before": {
        "MozTransition": "opacity 0.2s ease",
        "WebkitTransition": "opacity 0.2s ease",
        "MsTransition": "opacity 0.2s ease",
        "transition": "opacity 0.2s ease",
        "content": "''",
        "display": "block",
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "backgroundPosition": "center",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "2em 2em",
        "backgroundImage": "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cstyle%3Eline %7B stroke-width: 8px%3B stroke: %23f2849e%3B %7D%3C/style%3E%3Cline x1='15' y1='15' x2='85' y2='85' /%3E%3Cline x1='85' y1='15' x2='15' y2='85' /%3E%3C/svg%3E\")",
        "opacity": 0
    },
    "menu > close:after": {
        "MozTransition": "opacity 0.2s ease",
        "WebkitTransition": "opacity 0.2s ease",
        "MsTransition": "opacity 0.2s ease",
        "transition": "opacity 0.2s ease",
        "content": "''",
        "display": "block",
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "backgroundPosition": "center",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "2em 2em",
        "backgroundImage": "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cstyle%3Eline %7B stroke-width: 8px%3B stroke: %23585858%3B %7D%3C/style%3E%3Cline x1='15' y1='15' x2='85' y2='85' /%3E%3Cline x1='85' y1='15' x2='15' y2='85' /%3E%3C/svg%3E\")",
        "opacity": 1
    },
    "menu > close:hover:before": {
        "opacity": 1
    },
    "menu > close:hover:after": {
        "opacity": 0
    },
    "bodyis-menu-visible wrapper": {
        "MozPointerEvents": "none",
        "WebkitPointerEvents": "none",
        "MsPointerEvents": "none",
        "pointerEvents": "none",
        "cursor": "default",
        "opacity": 0.25
    },
    "bodyis-menu-visible menu": {
        "MozTransform": "translateX(0)",
        "WebkitTransform": "translateX(0)",
        "MsTransform": "translateX(0)",
        "transform": "translateX(0)",
        "visibility": "visible"
    },
    "bodyis-menu-visible menu > *": {
        "opacity": 1
    },
    "bodyis-menu-visible menu close": {
        "MozTransform": "scale(1.0) rotate(0deg)",
        "WebkitTransform": "scale(1.0) rotate(0deg)",
        "MsTransform": "scale(1.0) rotate(0deg)",
        "transform": "scale(1.0) rotate(0deg)",
        "opacity": 1
    },
    "main": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 6,
        "paddingLeft": 0
    },
    "footer > inner": {
        "display": "flex",
        "MozFlexWrap": "wrap",
        "WebkitFlexWrap": "wrap",
        "MsFlexWrap": "wrap",
        "flexWrap": "wrap",
        "MozFlexDirection": "row",
        "WebkitFlexDirection": "row",
        "MsFlexDirection": "row",
        "flexDirection": "row"
    },
    "footer > inner > * > :last-child": {
        "marginBottom": 0
    },
    "footer > inner section:nth-child(1)": {
        "width": "calc(66% - 2.5em)",
        "marginRight": 2.5
    },
    "footer > inner section:nth-child(2)": {
        "width": "calc(33% - 2.5em)",
        "marginLeft": 2.5
    },
    "footer > inner copyright": {
        "width": "100%",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 5,
        "listStyle": "none",
        "fontSize": 0.8,
        "color": "rgba(88, 88, 88, 0.5)"
    },
    "footer > inner copyright a": {
        "color": "inherit"
    },
    "footer > inner copyright li": {
        "display": "inline-block",
        "borderLeft": "solid 1px rgba(88, 88, 88, 0.15)",
        "lineHeight": 1,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 1
    },
    "footer > inner copyright li:first-child": {
        "borderLeft": 0,
        "paddingLeft": 0,
        "marginLeft": 0
    },
    "wrapper > * > inner": {
        "width": "100%",
        "maxWidth": 68,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "paddingTop": 0,
        "paddingRight": 2.5,
        "paddingBottom": 0,
        "paddingLeft": 2.5
    },
    "reduced-bottom-margin": {
        "marginBottom": 1.4
    },
    "detail-page-section": {
        "backgroundColor": "#585858",
        "color": "white",
        "borderRadius": 10,
        "paddingTop": 1,
        "paddingRight": 1,
        "paddingBottom": 1,
        "paddingLeft": 1,
        "height": 350,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0
    }
});