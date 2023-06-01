import {
  S
} from "./chunk-EPCXXMGT.js";
import {
  Di,
  Qf,
  b,
  jd
} from "./chunk-4QVIDK45.js";

// node_modules/.pnpm/mermaid@10.2.0/node_modules/mermaid/dist/svgDraw-c2b80d25.js
var E = 0;
var O = function(i, e, t, n, r) {
  const o = function(d) {
    switch (d) {
      case r.db.relationType.AGGREGATION:
        return "aggregation";
      case r.db.relationType.EXTENSION:
        return "extension";
      case r.db.relationType.COMPOSITION:
        return "composition";
      case r.db.relationType.DEPENDENCY:
        return "dependency";
      case r.db.relationType.LOLLIPOP:
        return "lollipop";
    }
  };
  e.points = e.points.filter((d) => !Number.isNaN(d.y));
  const l = e.points, g = S().x(function(d) {
    return d.x;
  }).y(function(d) {
    return d.y;
  }).curve(Qf), s = i.append("path").attr("d", g(l)).attr("id", "edge" + E).attr("class", "relation");
  let p = "";
  n.arrowMarkerAbsolute && (p = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, p = p.replace(/\(/g, "\\("), p = p.replace(/\)/g, "\\)")), t.relation.lineType == 1 && s.attr("class", "relation dashed-line"), t.relation.lineType == 10 && s.attr("class", "relation dotted-line"), t.relation.type1 !== "none" && s.attr(
    "marker-start",
    "url(" + p + "#" + o(t.relation.type1) + "Start)"
  ), t.relation.type2 !== "none" && s.attr(
    "marker-end",
    "url(" + p + "#" + o(t.relation.type2) + "End)"
  );
  let h, a;
  const c = e.points.length;
  let b2 = Di.calcLabelPosition(e.points);
  h = b2.x, a = b2.y;
  let u, m, B, T;
  if (c % 2 !== 0 && c > 1) {
    let d = Di.calcCardinalityPosition(
      t.relation.type1 !== "none",
      e.points,
      e.points[0]
    ), w = Di.calcCardinalityPosition(
      t.relation.type2 !== "none",
      e.points,
      e.points[c - 1]
    );
    b.debug("cardinality_1_point " + JSON.stringify(d)), b.debug("cardinality_2_point " + JSON.stringify(w)), u = d.x, m = d.y, B = w.x, T = w.y;
  }
  if (t.title !== void 0) {
    const d = i.append("g").attr("class", "classLabel"), w = d.append("text").attr("class", "label").attr("x", h).attr("y", a).attr("fill", "red").attr("text-anchor", "middle").text(t.title);
    window.label = w;
    const y = w.node().getBBox();
    d.insert("rect", ":first-child").attr("class", "box").attr("x", y.x - n.padding / 2).attr("y", y.y - n.padding / 2).attr("width", y.width + n.padding).attr("height", y.height + n.padding);
  }
  b.info("Rendering relation " + JSON.stringify(t)), t.relationTitle1 !== void 0 && t.relationTitle1 !== "none" && i.append("g").attr("class", "cardinality").append("text").attr("class", "type1").attr("x", u).attr("y", m).attr("fill", "black").attr("font-size", "6").text(t.relationTitle1), t.relationTitle2 !== void 0 && t.relationTitle2 !== "none" && i.append("g").attr("class", "cardinality").append("text").attr("class", "type2").attr("x", B).attr("y", T).attr("fill", "black").attr("font-size", "6").text(t.relationTitle2), E++;
};
var P = function(i, e, t, n) {
  b.debug("Rendering class ", e, t);
  const r = e.id, o = {
    id: r,
    label: e.id,
    width: 0,
    height: 0
  }, l = i.append("g").attr("id", n.db.lookUpDomId(r)).attr("class", "classGroup");
  let g;
  e.link ? g = l.append("svg:a").attr("xlink:href", e.link).attr("target", e.linkTarget).append("text").attr("y", t.textHeight + t.padding).attr("x", 0) : g = l.append("text").attr("y", t.textHeight + t.padding).attr("x", 0);
  let s = true;
  e.annotations.forEach(function(x) {
    const H = g.append("tspan").text("«" + x + "»");
    s || H.attr("dy", t.textHeight), s = false;
  });
  let p = C(e);
  const h = g.append("tspan").text(p).attr("class", "title");
  s || h.attr("dy", t.textHeight);
  const a = g.node().getBBox().height, c = l.append("line").attr("x1", 0).attr("y1", t.padding + a + t.dividerMargin / 2).attr("y2", t.padding + a + t.dividerMargin / 2), b2 = l.append("text").attr("x", t.padding).attr("y", a + t.dividerMargin + t.textHeight).attr("fill", "white").attr("class", "classText");
  s = true, e.members.forEach(function(x) {
    S2(b2, x, s, t), s = false;
  });
  const u = b2.node().getBBox(), m = l.append("line").attr("x1", 0).attr("y1", t.padding + a + t.dividerMargin + u.height).attr("y2", t.padding + a + t.dividerMargin + u.height), B = l.append("text").attr("x", t.padding).attr("y", a + 2 * t.dividerMargin + u.height + t.textHeight).attr("fill", "white").attr("class", "classText");
  s = true, e.methods.forEach(function(x) {
    S2(B, x, s, t), s = false;
  });
  const T = l.node().getBBox();
  var d = " ";
  e.cssClasses.length > 0 && (d = d + e.cssClasses.join(" "));
  const y = l.insert("rect", ":first-child").attr("x", 0).attr("y", 0).attr("width", T.width + 2 * t.padding).attr("height", T.height + t.padding + 0.5 * t.dividerMargin).attr("class", d).node().getBBox().width;
  return g.node().childNodes.forEach(function(x) {
    x.setAttribute("x", (y - x.getBBox().width) / 2);
  }), e.tooltip && g.insert("title").text(e.tooltip), c.attr("x2", y), m.attr("x2", y), o.width = y, o.height = T.height + t.padding + 0.5 * t.dividerMargin, o;
};
var C = function(i) {
  let e = i.id;
  return i.type && (e += "<" + i.type + ">"), e;
};
var A = function(i, e, t, n) {
  b.debug("Rendering note ", e, t);
  const r = e.id, o = {
    id: r,
    text: e.text,
    width: 0,
    height: 0
  }, l = i.append("g").attr("id", r).attr("class", "classGroup");
  let g = l.append("text").attr("y", t.textHeight + t.padding).attr("x", 0);
  const s = JSON.parse(`"${e.text}"`).split(`
`);
  s.forEach(function(c) {
    b.debug(`Adding line: ${c}`), g.append("tspan").text(c).attr("class", "title").attr("dy", t.textHeight);
  });
  const p = l.node().getBBox(), a = l.insert("rect", ":first-child").attr("x", 0).attr("y", 0).attr("width", p.width + 2 * t.padding).attr(
    "height",
    p.height + s.length * t.textHeight + t.padding + 0.5 * t.dividerMargin
  ).node().getBBox().width;
  return g.node().childNodes.forEach(function(c) {
    c.setAttribute("x", (a - c.getBBox().width) / 2);
  }), o.width = a, o.height = p.height + s.length * t.textHeight + t.padding + 0.5 * t.dividerMargin, o;
};
var M = function(i) {
  let e = "", t = "", n = "", r = "", o = i.substring(0, 1), l = i.substring(i.length - 1, i.length);
  o.match(/[#+~-]/) && (r = o);
  let g = /[\s\w)~]/;
  l.match(g) || (t = _(l));
  const s = r === "" ? 0 : 1;
  let p = t === "" ? i.length : i.length - 1;
  i = i.substring(s, p);
  const h = i.indexOf("("), a = i.indexOf(")");
  if (h > 1 && a > h && a <= i.length) {
    let b2 = i.substring(0, h).trim();
    const u = i.substring(h + 1, a);
    if (e = r + b2 + "(" + jd(u.trim()) + ")", a < i.length) {
      let m = i.substring(a + 1, a + 2);
      t === "" && !m.match(g) ? (t = _(m), n = i.substring(a + 2).trim()) : n = i.substring(a + 1).trim(), n !== "" && (n.charAt(0) === ":" && (n = n.substring(1).trim()), n = " : " + jd(n), e += n);
    }
  } else
    e = r + jd(i);
  return {
    displayText: e,
    cssStyle: t
  };
};
var S2 = function(i, e, t, n) {
  let r = M(e);
  const o = i.append("tspan").attr("x", n.padding).text(r.displayText);
  r.cssStyle !== "" && o.attr("style", r.cssStyle), t || o.attr("dy", n.textHeight);
};
var _ = function(i) {
  switch (i) {
    case "*":
      return "font-style:italic;";
    case "$":
      return "text-decoration:underline;";
    default:
      return "";
  }
};
var R = {
  getClassTitleString: C,
  drawClass: P,
  drawEdge: O,
  drawNote: A,
  parseMember: M
};

export {
  M,
  R
};
//# sourceMappingURL=chunk-32XCHDCL.js.map