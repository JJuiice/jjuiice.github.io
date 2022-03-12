// BB DTS Constants
const header = `
/dts-v1/;
/plugin/;\n`.trimStart();
const am355x_bbw_bbb_bash = "#include &lt;dt-bindings/board/am335x-bbw-bbb-bash.h&gt;";
const bb_dts_comm_init = `
/ {
  compatible = "ti,beaglebone", "ti,beaglebone-black";
  part-number = "BB-<your-part-name>";
  version = "00A0";\n`;
const exc_use = `
  exclusive-use=`.trimStart();
const frag_0 = `
  /*
   * Helper to show loaded overlays under /proc/device-tree/overlays/
   */
  fragment@0 {
    target-path="/";
    __overlay__ {
      chosen {
        overlays {
          BB-<your-part-name>-00A0 = __TIMESTAMP__;
        };
      };
    };
  };\n`;
const frag_1_open = `
  /*
   * Disable pins to be configured so that conflicts may be avoided
   */
  fragment@1 {
    target = <&ocp>;
    __overlay__ {\n`;
const am33xx_pinmux_conf = `
  /*
   * AM33XX PINMUX Configuration
   */
  fragment@2 {
    target = &lt;&am33xx_pinmux&gt;;
    __overlay__ {
    };
  };\n`;
const bone_pinmux_helper_conf = `
  /*
   * Use bone-pinmux-helper to apply our pinmux
   */
  fragment@3 {
    target = &lt;&ocp&gt;;
    __overlay__ {
    };
  };\n`;
const close_brac = "};"

function generateDTS() {
  const P9_CONFS = document.querySelectorAll("#p9 input[type=checkbox]:checked");
  const P8_CONFS = document.querySelectorAll("#p8 input[type=checkbox]:checked");

  var disable_pins = "";

  P8_CONFS.forEach(pin =>
    disable_pins = disable_pins.concat("\tP8_", pin.id.substring(pin.id.indexOf("_") + 1), "_pinmux { status = \"disabled\"; };\n")
  );
  P9_CONFS.forEach(pin =>
    disable_pins = disable_pins.concat("\tP9_", pin.id.substring(pin.id.indexOf("_") + 1), "_pinmux { status = \"disabled\"; };\n")
  );

  var generated_dts = header + bb_dts_comm_init + frag_0 + frag_1_open + disable_pins + "    " + close_brac + "\n  " + close_brac + "\n" + close_brac;

  document.querySelector("#dts_out").textContent = generated_dts;
}
