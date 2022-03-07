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
const frag_1 = `
  /*
   * Disable pins to be configured so that conflicts may be avoided
   */
  fragment@1 {
    target = <&ocp>;
    __overlay__ {
    };
  };\n`;
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
	document.querySelector("#dts_out").textContent = header + bb_dts_comm_init + frag_0 + frag_1 + close_brac;
}
