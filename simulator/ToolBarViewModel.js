var i;
var sampleList = [];
for (i = 1; i <= 13; i++)
  sampleList.push(new ToolBarItem("Sample " + i, "sample" + i, undefined, ToolTypeEnum.BUTTON, undefined, undefined));

function ToolBarViewModel() {
  var self = this;
  /**
   * All ToolBarGroups and Items are created here.
   * Knockout.js will automatically draw these and
   * maintain the events ocurred and automatically
   * update the value here.
   */
  self.toolbarGroups = [
    new ToolBarGroup("File: ", [
      new ToolBarItem("Undo", "undo", undefined,
        ToolTypeEnum.BUTTON, undefined, function () { alert(""); }),
      new ToolBarItem("Redo", "redo", undefined,
        ToolTypeEnum.BUTTON, undefined, function () { alert(""); }),
      new ToolBarItem("Reset", "reset", undefined,
        ToolTypeEnum.BUTTON, undefined, function () { alert(""); }),
      new ToolBarItem("Save", "save", undefined,
        ToolTypeEnum.BUTTON, undefined, function () { alert(""); }),
      new ToolBarItem("Open", "open", undefined,
        ToolTypeEnum.BUTTON, undefined, function () { alert(""); }),
      new ToolBarItem("Export", "export_svg", undefined,
        ToolTypeEnum.BUTTON, undefined, function () { alert(""); }),
      self.samples = new ToolBarItem("Samples", "samples", 4, ToolTypeEnum.RADIOLIST, sampleList)
    ]),
    self.tools = new ToolBarGroup("Tools: ", [
      new ToolBarItem("Ray", "tool_laser", "ray",
        ToolTypeEnum.RADIO),
      new ToolBarItem("Beam", "tool_parallel", "beam",
        ToolTypeEnum.RADIO),
      new ToolBarItem("Point Source", "tool_radiant", "point_source",
        ToolTypeEnum.RADIO),
      self.mirrors = new ToolBarItem("Mirrors", "tool_mirror_", 4, ToolTypeEnum.RADIOLIST, [
        new ToolBarItem("Segment", "tool_mirror", "mirror",
          ToolTypeEnum.RADIO),
        new ToolBarItem("Circular Arc", "tool_arcmirror", "mirror_arc",
          ToolTypeEnum.RADIO),
        new ToolBarItem("Ideal Curved", "tool_idealmirror", "ideal_curved_mirror",
          ToolTypeEnum.RADIO),
        new ToolBarItem("Parabolic", "tool_parabolicmirror", "mirror_parabolic",
          ToolTypeEnum.RADIO),
        new ToolBarItem("Beam Splitter", "tool_beamsplitter", "beamsplitter",
          ToolTypeEnum.RADIO)
      ]),
      self.glasses = new ToolBarItem("Glasses", "tool_refractor_", 3, ToolTypeEnum.RADIOLIST, [
        new ToolBarItem("Half-plane", "tool_halfplane", "glass_halfplane",
          ToolTypeEnum.RADIO),
        new ToolBarItem("Circle", "tool_circlelens", "glass_circle",
          ToolTypeEnum.RADIO),
        new ToolBarItem("Free-shape", "tool_refractor", "glass",
          ToolTypeEnum.RADIO),
        new ToolBarItem("Ideal Lens", "tool_lens", "ideal_lens",
          ToolTypeEnum.RADIO),
        new ToolBarItem("Spherical Lens", "tool_sphericallens", "spherical_lens",
          ToolTypeEnum.RADIO)
      ]),
      self.blockers = new ToolBarItem("Blockers", "tool_blockers_", 3, ToolTypeEnum.RADIOLIST, [
        new ToolBarItem("Blocker", "tool_blackline", "blocker",
          ToolTypeEnum.RADIO),
        new ToolBarItem("Blocker", "tool_blackcircle", "blocker",
          ToolTypeEnum.RADIO)
      ]),
      new ToolBarItem("Ruler", "tool_ruler", "ruler",
        ToolTypeEnum.RADIO),
      new ToolBarItem("Protractor", "tool_protractor", "protractor",
        ToolTypeEnum.RADIO),
      new ToolBarItem("Power measurement", "tool_power", "power",
        ToolTypeEnum.RADIO),
      new ToolBarItem("Text", "tool_text", undefined,
        ToolTypeEnum.RADIO),
      new ToolBarItem("Move View", "tool_", undefined,
        ToolTypeEnum.RADIO)
    ]),
    self.modes = new ToolBarGroup("View: ", [
      new ToolBarItem("Rays", "mode_light", "normal",
        ToolTypeEnum.RADIO),
      new ToolBarItem("Extended Rays", "mode_extended_light", "extended_rays",
        ToolTypeEnum.RADIO),
      new ToolBarItem("All Images", "mode_images", "all_images",
        ToolTypeEnum.RADIO),
      new ToolBarItem("Seen by Observer", "mode_observer", "seen_by_observer",
        ToolTypeEnum.RADIO)
    ]),
    new ToolBarGroup("Settings: ", [
      self.rayDensity = new ToolBarItem("Ray Density", "rayDensity", undefined,
        ToolTypeEnum.SLIDE, undefined, undefined,
        -3, 3, 0.0001, -2.3026),
      self.c1 = new ToolBarItem("Grid", "showgrid", undefined,
        ToolTypeEnum.CHECK),
      self.c2 = new ToolBarItem("Snap to Grid", "grid", undefined,
        ToolTypeEnum.CHECK),
      self.c3 = new ToolBarItem("Lock Objects", "lockobjs", undefined,
        ToolTypeEnum.CHECK),
      self.zoom = new ToolBarItem("Zoom", "zoom", undefined,
        ToolTypeEnum.SLIDE, undefined, undefined,
        25, 500, 25, 100),
      new ToolBarItem("Help", "help", undefined,
        ToolTypeEnum.HELP, undefined)
    ])
  ];
}

init_i18n();

var toolBarViewModel = new ToolBarViewModel();
ko.applyBindings(toolBarViewModel);

window.toolBarViewModel = toolBarViewModel;

$("#help").click(function () {
  if (this.checked)
    $("[data-toggle=popover]").popover("enable");
  else
    $("[data-toggle=popover]").popover("disable");
});
