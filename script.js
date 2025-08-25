function loco() {
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main-wrapper"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy("#main-wrapper", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main-wrapper").style.transform ? "transform" : "fixed"
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
loco();


function canvas(){
    const canvas = document.querySelector("#canvas-div canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  ./BACKGROUND_FRAMES/frame_0001.jpeg
  ./BACKGROUND_FRAMES/frame_0002.jpeg
  ./BACKGROUND_FRAMES/frame_0003.jpeg
  ./BACKGROUND_FRAMES/frame_0004.jpeg
  ./BACKGROUND_FRAMES/frame_0005.jpeg
  ./BACKGROUND_FRAMES/frame_0006.jpeg
  ./BACKGROUND_FRAMES/frame_0007.jpeg
  ./BACKGROUND_FRAMES/frame_0008.jpeg
  ./BACKGROUND_FRAMES/frame_0009.jpeg
  ./BACKGROUND_FRAMES/frame_0010.jpeg
  ./BACKGROUND_FRAMES/frame_0011.jpeg
  ./BACKGROUND_FRAMES/frame_0012.jpeg
  ./BACKGROUND_FRAMES/frame_0013.jpeg
  ./BACKGROUND_FRAMES/frame_0014.jpeg
  ./BACKGROUND_FRAMES/frame_0015.jpeg
  ./BACKGROUND_FRAMES/frame_0016.jpeg
  ./BACKGROUND_FRAMES/frame_0017.jpeg
  ./BACKGROUND_FRAMES/frame_0018.jpeg
  ./BACKGROUND_FRAMES/frame_0019.jpeg
  ./BACKGROUND_FRAMES/frame_0020.jpeg
  ./BACKGROUND_FRAMES/frame_0021.jpeg
  ./BACKGROUND_FRAMES/frame_0022.jpeg
  ./BACKGROUND_FRAMES/frame_0023.jpeg
  ./BACKGROUND_FRAMES/frame_0024.jpeg
  ./BACKGROUND_FRAMES/frame_0025.jpeg
  ./BACKGROUND_FRAMES/frame_0026.jpeg
  ./BACKGROUND_FRAMES/frame_0027.jpeg
  ./BACKGROUND_FRAMES/frame_0028.jpeg
  ./BACKGROUND_FRAMES/frame_0029.jpeg
  ./BACKGROUND_FRAMES/frame_0030.jpeg
  ./BACKGROUND_FRAMES/frame_0031.jpeg
  ./BACKGROUND_FRAMES/frame_0032.jpeg
  ./BACKGROUND_FRAMES/frame_0033.jpeg
  ./BACKGROUND_FRAMES/frame_0034.jpeg
  ./BACKGROUND_FRAMES/frame_0035.jpeg
  ./BACKGROUND_FRAMES/frame_0036.jpeg
  ./BACKGROUND_FRAMES/frame_0037.jpeg
  ./BACKGROUND_FRAMES/frame_0038.jpeg
  ./BACKGROUND_FRAMES/frame_0039.jpeg
  ./BACKGROUND_FRAMES/frame_0040.jpeg
  ./BACKGROUND_FRAMES/frame_0041.jpeg
  ./BACKGROUND_FRAMES/frame_0042.jpeg
  ./BACKGROUND_FRAMES/frame_0043.jpeg
  ./BACKGROUND_FRAMES/frame_0044.jpeg
  ./BACKGROUND_FRAMES/frame_0045.jpeg
  ./BACKGROUND_FRAMES/frame_0046.jpeg
  ./BACKGROUND_FRAMES/frame_0047.jpeg
  ./BACKGROUND_FRAMES/frame_0048.jpeg
  ./BACKGROUND_FRAMES/frame_0049.jpeg
  ./BACKGROUND_FRAMES/frame_0050.jpeg
  ./BACKGROUND_FRAMES/frame_0051.jpeg
  ./BACKGROUND_FRAMES/frame_0052.jpeg
  ./BACKGROUND_FRAMES/frame_0053.jpeg
  ./BACKGROUND_FRAMES/frame_0054.jpeg
  ./BACKGROUND_FRAMES/frame_0055.jpeg
  ./BACKGROUND_FRAMES/frame_0056.jpeg
  ./BACKGROUND_FRAMES/frame_0057.jpeg
  ./BACKGROUND_FRAMES/frame_0058.jpeg
  ./BACKGROUND_FRAMES/frame_0059.jpeg
  ./BACKGROUND_FRAMES/frame_0060.jpeg
  ./BACKGROUND_FRAMES/frame_0061.jpeg
  ./BACKGROUND_FRAMES/frame_0062.jpeg
  ./BACKGROUND_FRAMES/frame_0063.jpeg
  ./BACKGROUND_FRAMES/frame_0064.jpeg
  ./BACKGROUND_FRAMES/frame_0065.jpeg
  ./BACKGROUND_FRAMES/frame_0066.jpeg
  ./BACKGROUND_FRAMES/frame_0067.jpeg
  ./BACKGROUND_FRAMES/frame_0068.jpeg
  ./BACKGROUND_FRAMES/frame_0069.jpeg
  ./BACKGROUND_FRAMES/frame_0070.jpeg
  ./BACKGROUND_FRAMES/frame_0071.jpeg
  ./BACKGROUND_FRAMES/frame_0072.jpeg
  ./BACKGROUND_FRAMES/frame_0073.jpeg
  ./BACKGROUND_FRAMES/frame_0074.jpeg
  ./BACKGROUND_FRAMES/frame_0075.jpeg
  ./BACKGROUND_FRAMES/frame_0076.jpeg
  ./BACKGROUND_FRAMES/frame_0077.jpeg
  ./BACKGROUND_FRAMES/frame_0078.jpeg
  ./BACKGROUND_FRAMES/frame_0079.jpeg
  ./BACKGROUND_FRAMES/frame_0080.jpeg
  ./BACKGROUND_FRAMES/frame_0081.jpeg
  ./BACKGROUND_FRAMES/frame_0082.jpeg
  ./BACKGROUND_FRAMES/frame_0083.jpeg
  ./BACKGROUND_FRAMES/frame_0084.jpeg
  ./BACKGROUND_FRAMES/frame_0085.jpeg
  ./BACKGROUND_FRAMES/frame_0086.jpeg
  ./BACKGROUND_FRAMES/frame_0087.jpeg
  ./BACKGROUND_FRAMES/frame_0088.jpeg
  ./BACKGROUND_FRAMES/frame_0089.jpeg
  ./BACKGROUND_FRAMES/frame_0090.jpeg
  ./BACKGROUND_FRAMES/frame_0091.jpeg
  ./BACKGROUND_FRAMES/frame_0092.jpeg
  ./BACKGROUND_FRAMES/frame_0093.jpeg
  ./BACKGROUND_FRAMES/frame_0094.jpeg
  ./BACKGROUND_FRAMES/frame_0095.jpeg
  ./BACKGROUND_FRAMES/frame_0096.jpeg
  ./BACKGROUND_FRAMES/frame_0097.jpeg
  ./BACKGROUND_FRAMES/frame_0098.jpeg
  ./BACKGROUND_FRAMES/frame_0099.jpeg
  ./BACKGROUND_FRAMES/frame_0100.jpeg
  ./BACKGROUND_FRAMES/frame_0101.jpeg
  ./BACKGROUND_FRAMES/frame_0102.jpeg
  ./BACKGROUND_FRAMES/frame_0103.jpeg
  ./BACKGROUND_FRAMES/frame_0104.jpeg
  ./BACKGROUND_FRAMES/frame_0105.jpeg
  ./BACKGROUND_FRAMES/frame_0106.jpeg
  ./BACKGROUND_FRAMES/frame_0107.jpeg
  ./BACKGROUND_FRAMES/frame_0108.jpeg
  ./BACKGROUND_FRAMES/frame_0109.jpeg
  ./BACKGROUND_FRAMES/frame_0110.jpeg
  ./BACKGROUND_FRAMES/frame_0111.jpeg
  ./BACKGROUND_FRAMES/frame_0112.jpeg
  ./BACKGROUND_FRAMES/frame_0113.jpeg
  ./BACKGROUND_FRAMES/frame_0114.jpeg
  ./BACKGROUND_FRAMES/frame_0115.jpeg
  ./BACKGROUND_FRAMES/frame_0116.jpeg
  ./BACKGROUND_FRAMES/frame_0117.jpeg
  ./BACKGROUND_FRAMES/frame_0118.jpeg
  ./BACKGROUND_FRAMES/frame_0119.jpeg
  ./BACKGROUND_FRAMES/frame_0120.jpeg
  ./BACKGROUND_FRAMES/frame_0121.jpeg
  ./BACKGROUND_FRAMES/frame_0122.jpeg
  ./BACKGROUND_FRAMES/frame_0123.jpeg
  ./BACKGROUND_FRAMES/frame_0124.jpeg
  ./BACKGROUND_FRAMES/frame_0125.jpeg
  ./BACKGROUND_FRAMES/frame_0126.jpeg
  ./BACKGROUND_FRAMES/frame_0127.jpeg
  ./BACKGROUND_FRAMES/frame_0128.jpeg
  ./BACKGROUND_FRAMES/frame_0129.jpeg
  ./BACKGROUND_FRAMES/frame_0130.jpeg
  ./BACKGROUND_FRAMES/frame_0131.jpeg
  ./BACKGROUND_FRAMES/frame_0132.jpeg
  ./BACKGROUND_FRAMES/frame_0133.jpeg
  ./BACKGROUND_FRAMES/frame_0134.jpeg
  ./BACKGROUND_FRAMES/frame_0135.jpeg
  ./BACKGROUND_FRAMES/frame_0136.jpeg
  ./BACKGROUND_FRAMES/frame_0137.jpeg
  ./BACKGROUND_FRAMES/frame_0138.jpeg
  ./BACKGROUND_FRAMES/frame_0139.jpeg
  ./BACKGROUND_FRAMES/frame_0140.jpeg
  ./BACKGROUND_FRAMES/frame_0141.jpeg
  ./BACKGROUND_FRAMES/frame_0142.jpeg
  ./BACKGROUND_FRAMES/frame_0143.jpeg
  ./BACKGROUND_FRAMES/frame_0144.jpeg
  ./BACKGROUND_FRAMES/frame_0145.jpeg
  ./BACKGROUND_FRAMES/frame_0146.jpeg
  ./BACKGROUND_FRAMES/frame_0147.jpeg
  ./BACKGROUND_FRAMES/frame_0148.jpeg
  ./BACKGROUND_FRAMES/frame_0149.jpeg
  ./BACKGROUND_FRAMES/frame_0150.jpeg
  ./BACKGROUND_FRAMES/frame_0151.jpeg
  ./BACKGROUND_FRAMES/frame_0152.jpeg
  ./BACKGROUND_FRAMES/frame_0153.jpeg
  ./BACKGROUND_FRAMES/frame_0154.jpeg
  ./BACKGROUND_FRAMES/frame_0155.jpeg
  ./BACKGROUND_FRAMES/frame_0156.jpeg
  ./BACKGROUND_FRAMES/frame_0157.jpeg
  ./BACKGROUND_FRAMES/frame_0158.jpeg
  ./BACKGROUND_FRAMES/frame_0159.jpeg
  ./BACKGROUND_FRAMES/frame_0160.jpeg
  ./BACKGROUND_FRAMES/frame_0161.jpeg
  ./BACKGROUND_FRAMES/frame_0162.jpeg
  ./BACKGROUND_FRAMES/frame_0163.jpeg
  ./BACKGROUND_FRAMES/frame_0164.jpeg
  ./BACKGROUND_FRAMES/frame_0165.jpeg
  ./BACKGROUND_FRAMES/frame_0166.jpeg
  ./BACKGROUND_FRAMES/frame_0167.jpeg
  ./BACKGROUND_FRAMES/frame_0168.jpeg
  ./BACKGROUND_FRAMES/frame_0169.jpeg
  ./BACKGROUND_FRAMES/frame_0170.jpeg
  ./BACKGROUND_FRAMES/frame_0171.jpeg
  ./BACKGROUND_FRAMES/frame_0172.jpeg
  ./BACKGROUND_FRAMES/frame_0173.jpeg
  ./BACKGROUND_FRAMES/frame_0174.jpeg
  ./BACKGROUND_FRAMES/frame_0175.jpeg
  ./BACKGROUND_FRAMES/frame_0176.jpeg
  ./BACKGROUND_FRAMES/frame_0177.jpeg
  ./BACKGROUND_FRAMES/frame_0178.jpeg
  ./BACKGROUND_FRAMES/frame_0179.jpeg
  ./BACKGROUND_FRAMES/frame_0180.jpeg
  ./BACKGROUND_FRAMES/frame_0181.jpeg
  ./BACKGROUND_FRAMES/frame_0182.jpeg
  ./BACKGROUND_FRAMES/frame_0183.jpeg
  ./BACKGROUND_FRAMES/frame_0184.jpeg
  ./BACKGROUND_FRAMES/frame_0185.jpeg
  ./BACKGROUND_FRAMES/frame_0186.jpeg
  ./BACKGROUND_FRAMES/frame_0187.jpeg
  ./BACKGROUND_FRAMES/frame_0188.jpeg
  ./BACKGROUND_FRAMES/frame_0189.jpeg
  ./BACKGROUND_FRAMES/frame_0190.jpeg
  ./BACKGROUND_FRAMES/frame_0191.jpeg
  ./BACKGROUND_FRAMES/frame_0192.jpeg
  ./BACKGROUND_FRAMES/frame_0193.jpeg
  ./BACKGROUND_FRAMES/frame_0194.jpeg
  ./BACKGROUND_FRAMES/frame_0195.jpeg
  ./BACKGROUND_FRAMES/frame_0196.jpeg
  ./BACKGROUND_FRAMES/frame_0197.jpeg
  ./BACKGROUND_FRAMES/frame_0198.jpeg
  ./BACKGROUND_FRAMES/frame_0199.jpeg
  ./BACKGROUND_FRAMES/frame_0200.jpeg
  ./BACKGROUND_FRAMES/frame_0201.jpeg
  ./BACKGROUND_FRAMES/frame_0202.jpeg
  ./BACKGROUND_FRAMES/frame_0203.jpeg
  ./BACKGROUND_FRAMES/frame_0204.jpeg
  ./BACKGROUND_FRAMES/frame_0205.jpeg
  ./BACKGROUND_FRAMES/frame_0206.jpeg
  ./BACKGROUND_FRAMES/frame_0207.jpeg
  ./BACKGROUND_FRAMES/frame_0208.jpeg
  ./BACKGROUND_FRAMES/frame_0209.jpeg
  ./BACKGROUND_FRAMES/frame_0210.jpeg
  ./BACKGROUND_FRAMES/frame_0211.jpeg
  ./BACKGROUND_FRAMES/frame_0212.jpeg
  ./BACKGROUND_FRAMES/frame_0213.jpeg
  ./BACKGROUND_FRAMES/frame_0214.jpeg
  ./BACKGROUND_FRAMES/frame_0215.jpeg
  ./BACKGROUND_FRAMES/frame_0216.jpeg
  ./BACKGROUND_FRAMES/frame_0217.jpeg
  ./BACKGROUND_FRAMES/frame_0218.jpeg
  ./BACKGROUND_FRAMES/frame_0219.jpeg
  ./BACKGROUND_FRAMES/frame_0220.jpeg
  ./BACKGROUND_FRAMES/frame_0221.jpeg
  ./BACKGROUND_FRAMES/frame_0222.jpeg
  ./BACKGROUND_FRAMES/frame_0223.jpeg
  ./BACKGROUND_FRAMES/frame_0224.jpeg
  ./BACKGROUND_FRAMES/frame_0225.jpeg
  ./BACKGROUND_FRAMES/frame_0226.jpeg
  ./BACKGROUND_FRAMES/frame_0227.jpeg
  ./BACKGROUND_FRAMES/frame_0228.jpeg
  ./BACKGROUND_FRAMES/frame_0229.jpeg
  ./BACKGROUND_FRAMES/frame_0230.jpeg
  ./BACKGROUND_FRAMES/frame_0231.jpeg
  ./BACKGROUND_FRAMES/frame_0232.jpeg
  ./BACKGROUND_FRAMES/frame_0233.jpeg
  ./BACKGROUND_FRAMES/frame_0234.jpeg
  ./BACKGROUND_FRAMES/frame_0235.jpeg
  ./BACKGROUND_FRAMES/frame_0236.jpeg
  ./BACKGROUND_FRAMES/frame_0237.jpeg
  ./BACKGROUND_FRAMES/frame_0238.jpeg
  ./BACKGROUND_FRAMES/frame_0239.jpeg
  ./BACKGROUND_FRAMES/frame_0240.jpeg
  ./BACKGROUND_FRAMES/frame_0241.jpeg
  ./BACKGROUND_FRAMES/frame_0242.jpeg
  ./BACKGROUND_FRAMES/frame_0243.jpeg
  ./BACKGROUND_FRAMES/frame_0244.jpeg
  ./BACKGROUND_FRAMES/frame_0245.jpeg
  ./BACKGROUND_FRAMES/frame_0246.jpeg
  ./BACKGROUND_FRAMES/frame_0247.jpeg
  ./BACKGROUND_FRAMES/frame_0248.jpeg
  ./BACKGROUND_FRAMES/frame_0249.jpeg
  ./BACKGROUND_FRAMES/frame_0250.jpeg
  ./BACKGROUND_FRAMES/frame_0251.jpeg
  ./BACKGROUND_FRAMES/frame_0252.jpeg
  ./BACKGROUND_FRAMES/frame_0253.jpeg
  ./BACKGROUND_FRAMES/frame_0254.jpeg
  ./BACKGROUND_FRAMES/frame_0255.jpeg
  ./BACKGROUND_FRAMES/frame_0256.jpeg
  ./BACKGROUND_FRAMES/frame_0257.jpeg
  ./BACKGROUND_FRAMES/frame_0258.jpeg
  ./BACKGROUND_FRAMES/frame_0259.jpeg
  ./BACKGROUND_FRAMES/frame_0260.jpeg
  ./BACKGROUND_FRAMES/frame_0261.jpeg
  ./BACKGROUND_FRAMES/frame_0262.jpeg
  ./BACKGROUND_FRAMES/frame_0263.jpeg
  ./BACKGROUND_FRAMES/frame_0264.jpeg
  ./BACKGROUND_FRAMES/frame_0265.jpeg
  ./BACKGROUND_FRAMES/frame_0266.jpeg
  ./BACKGROUND_FRAMES/frame_0267.jpeg
  ./BACKGROUND_FRAMES/frame_0268.jpeg
  ./BACKGROUND_FRAMES/frame_0269.jpeg
  ./BACKGROUND_FRAMES/frame_0270.jpeg
  ./BACKGROUND_FRAMES/frame_0271.jpeg
  ./BACKGROUND_FRAMES/frame_0272.jpeg
  ./BACKGROUND_FRAMES/frame_0273.jpeg
  ./BACKGROUND_FRAMES/frame_0274.jpeg
  ./BACKGROUND_FRAMES/frame_0275.jpeg
  ./BACKGROUND_FRAMES/frame_0276.jpeg
  ./BACKGROUND_FRAMES/frame_0277.jpeg
  ./BACKGROUND_FRAMES/frame_0278.jpeg
  ./BACKGROUND_FRAMES/frame_0279.jpeg
  ./BACKGROUND_FRAMES/frame_0280.jpeg
  ./BACKGROUND_FRAMES/frame_0281.jpeg
  ./BACKGROUND_FRAMES/frame_0282.jpeg
  ./BACKGROUND_FRAMES/frame_0283.jpeg
  ./BACKGROUND_FRAMES/frame_0284.jpeg
  ./BACKGROUND_FRAMES/frame_0285.jpeg
  ./BACKGROUND_FRAMES/frame_0286.jpeg
  ./BACKGROUND_FRAMES/frame_0287.jpeg
  ./BACKGROUND_FRAMES/frame_0288.jpeg
  ./BACKGROUND_FRAMES/frame_0289.jpeg
  ./BACKGROUND_FRAMES/frame_0290.jpeg
  ./BACKGROUND_FRAMES/frame_0291.jpeg
  ./BACKGROUND_FRAMES/frame_0292.jpeg
  ./BACKGROUND_FRAMES/frame_0293.jpeg
  ./BACKGROUND_FRAMES/frame_0294.jpeg
  ./BACKGROUND_FRAMES/frame_0295.jpeg
  ./BACKGROUND_FRAMES/frame_0296.jpeg
  ./BACKGROUND_FRAMES/frame_0297.jpeg
  ./BACKGROUND_FRAMES/frame_0298.jpeg
  ./BACKGROUND_FRAMES/frame_0299.jpeg
  ./BACKGROUND_FRAMES/frame_0300.jpeg
  ./BACKGROUND_FRAMES/frame_0301.jpeg
  ./BACKGROUND_FRAMES/frame_0302.jpeg
  ./BACKGROUND_FRAMES/frame_0303.jpeg
  ./BACKGROUND_FRAMES/frame_0304.jpeg
  ./BACKGROUND_FRAMES/frame_0305.jpeg
  ./BACKGROUND_FRAMES/frame_0306.jpeg
  ./BACKGROUND_FRAMES/frame_0307.jpeg
  ./BACKGROUND_FRAMES/frame_0308.jpeg
  ./BACKGROUND_FRAMES/frame_0309.jpeg
  ./BACKGROUND_FRAMES/frame_0310.jpeg
  ./BACKGROUND_FRAMES/frame_0311.jpeg
  ./BACKGROUND_FRAMES/frame_0312.jpeg
  ./BACKGROUND_FRAMES/frame_0313.jpeg
  ./BACKGROUND_FRAMES/frame_0314.jpeg
  ./BACKGROUND_FRAMES/frame_0315.jpeg
  ./BACKGROUND_FRAMES/frame_0316.jpeg
  ./BACKGROUND_FRAMES/frame_0317.jpeg
  ./BACKGROUND_FRAMES/frame_0318.jpeg
  ./BACKGROUND_FRAMES/frame_0319.jpeg
  ./BACKGROUND_FRAMES/frame_0320.jpeg
  ./BACKGROUND_FRAMES/frame_0321.jpeg
  ./BACKGROUND_FRAMES/frame_0322.jpeg
  ./BACKGROUND_FRAMES/frame_0323.jpeg
  ./BACKGROUND_FRAMES/frame_0324.jpeg
  ./BACKGROUND_FRAMES/frame_0325.jpeg
  ./BACKGROUND_FRAMES/frame_0326.jpeg
  ./BACKGROUND_FRAMES/frame_0327.jpeg
  ./BACKGROUND_FRAMES/frame_0328.jpeg
  ./BACKGROUND_FRAMES/frame_0329.jpeg
  ./BACKGROUND_FRAMES/frame_0330.jpeg
  ./BACKGROUND_FRAMES/frame_0331.jpeg
  ./BACKGROUND_FRAMES/frame_0332.jpeg
  ./BACKGROUND_FRAMES/frame_0333.jpeg
  ./BACKGROUND_FRAMES/frame_0334.jpeg
  ./BACKGROUND_FRAMES/frame_0335.jpeg
  ./BACKGROUND_FRAMES/frame_0336.jpeg
  ./BACKGROUND_FRAMES/frame_0337.jpeg
  ./BACKGROUND_FRAMES/frame_0338.jpeg
  ./BACKGROUND_FRAMES/frame_0339.jpeg
  ./BACKGROUND_FRAMES/frame_0340.jpeg
  ./BACKGROUND_FRAMES/frame_0341.jpeg
  ./BACKGROUND_FRAMES/frame_0342.jpeg
  ./BACKGROUND_FRAMES/frame_0343.jpeg
  ./BACKGROUND_FRAMES/frame_0344.jpeg
  ./BACKGROUND_FRAMES/frame_0345.jpeg
  ./BACKGROUND_FRAMES/frame_0346.jpeg
  ./BACKGROUND_FRAMES/frame_0347.jpeg
  ./BACKGROUND_FRAMES/frame_0348.jpeg
  ./BACKGROUND_FRAMES/frame_0349.jpeg
  ./BACKGROUND_FRAMES/frame_0350.jpeg
  ./BACKGROUND_FRAMES/frame_0351.jpeg
  ./BACKGROUND_FRAMES/frame_0352.jpeg
  ./BACKGROUND_FRAMES/frame_0353.jpeg
  ./BACKGROUND_FRAMES/frame_0354.jpeg
  ./BACKGROUND_FRAMES/frame_0355.jpeg
  ./BACKGROUND_FRAMES/frame_0356.jpeg
  ./BACKGROUND_FRAMES/frame_0357.jpeg
  ./BACKGROUND_FRAMES/frame_0358.jpeg
  ./BACKGROUND_FRAMES/frame_0359.jpeg
  ./BACKGROUND_FRAMES/frame_0360.jpeg
  ./BACKGROUND_FRAMES/frame_0361.jpeg
  ./BACKGROUND_FRAMES/frame_0362.jpeg
  ./BACKGROUND_FRAMES/frame_0363.jpeg
  ./BACKGROUND_FRAMES/frame_0364.jpeg
  ./BACKGROUND_FRAMES/frame_0365.jpeg
  ./BACKGROUND_FRAMES/frame_0366.jpeg
  ./BACKGROUND_FRAMES/frame_0367.jpeg
  ./BACKGROUND_FRAMES/frame_0368.jpeg
  ./BACKGROUND_FRAMES/frame_0369.jpeg
  ./BACKGROUND_FRAMES/frame_0370.jpeg
  ./BACKGROUND_FRAMES/frame_0371.jpeg
  ./BACKGROUND_FRAMES/frame_0372.jpeg
  ./BACKGROUND_FRAMES/frame_0373.jpeg
  ./BACKGROUND_FRAMES/frame_0374.jpeg
  ./BACKGROUND_FRAMES/frame_0375.jpeg
  ./BACKGROUND_FRAMES/frame_0376.jpeg
  ./BACKGROUND_FRAMES/frame_0377.jpeg
  ./BACKGROUND_FRAMES/frame_0378.jpeg
  ./BACKGROUND_FRAMES/frame_0379.jpeg
  ./BACKGROUND_FRAMES/frame_0380.jpeg
  ./BACKGROUND_FRAMES/frame_0381.jpeg
  ./BACKGROUND_FRAMES/frame_0382.jpeg
  ./BACKGROUND_FRAMES/frame_0383.jpeg
  ./BACKGROUND_FRAMES/frame_0384.jpeg
  ./BACKGROUND_FRAMES/frame_0385.jpeg
  ./BACKGROUND_FRAMES/frame_0386.jpeg
  ./BACKGROUND_FRAMES/frame_0387.jpeg
  ./BACKGROUND_FRAMES/frame_0388.jpeg
  ./BACKGROUND_FRAMES/frame_0389.jpeg
  ./BACKGROUND_FRAMES/frame_0390.jpeg
  ./BACKGROUND_FRAMES/frame_0391.jpeg
  ./BACKGROUND_FRAMES/frame_0392.jpeg
  ./BACKGROUND_FRAMES/frame_0393.jpeg
  ./BACKGROUND_FRAMES/frame_0394.jpeg
  ./BACKGROUND_FRAMES/frame_0395.jpeg
  ./BACKGROUND_FRAMES/frame_0396.jpeg
  ./BACKGROUND_FRAMES/frame_0397.jpeg
  ./BACKGROUND_FRAMES/frame_0398.jpeg
  ./BACKGROUND_FRAMES/frame_0399.jpeg
  ./BACKGROUND_FRAMES/frame_0400.jpeg
  ./BACKGROUND_FRAMES/frame_0401.jpeg
  ./BACKGROUND_FRAMES/frame_0402.jpeg
  ./BACKGROUND_FRAMES/frame_0403.jpeg
  ./BACKGROUND_FRAMES/frame_0404.jpeg
  ./BACKGROUND_FRAMES/frame_0405.jpeg
  ./BACKGROUND_FRAMES/frame_0406.jpeg
  ./BACKGROUND_FRAMES/frame_0407.jpeg
  ./BACKGROUND_FRAMES/frame_0408.jpeg
  ./BACKGROUND_FRAMES/frame_0409.jpeg
  ./BACKGROUND_FRAMES/frame_0410.jpeg
  ./BACKGROUND_FRAMES/frame_0411.jpeg
  ./BACKGROUND_FRAMES/frame_0412.jpeg
  ./BACKGROUND_FRAMES/frame_0413.jpeg
  ./BACKGROUND_FRAMES/frame_0414.jpeg
  ./BACKGROUND_FRAMES/frame_0415.jpeg
  ./BACKGROUND_FRAMES/frame_0416.jpeg
  ./BACKGROUND_FRAMES/frame_0417.jpeg
  ./BACKGROUND_FRAMES/frame_0418.jpeg
  ./BACKGROUND_FRAMES/frame_0419.jpeg
  ./BACKGROUND_FRAMES/frame_0420.jpeg
  ./BACKGROUND_FRAMES/frame_0421.jpeg
  ./BACKGROUND_FRAMES/frame_0422.jpeg
  ./BACKGROUND_FRAMES/frame_0423.jpeg
  ./BACKGROUND_FRAMES/frame_0424.jpeg
  ./BACKGROUND_FRAMES/frame_0425.jpeg
  ./BACKGROUND_FRAMES/frame_0426.jpeg
  ./BACKGROUND_FRAMES/frame_0427.jpeg
  ./BACKGROUND_FRAMES/frame_0428.jpeg
  ./BACKGROUND_FRAMES/frame_0429.jpeg
  ./BACKGROUND_FRAMES/frame_0430.jpeg
  ./BACKGROUND_FRAMES/frame_0431.jpeg
  ./BACKGROUND_FRAMES/frame_0432.jpeg
  ./BACKGROUND_FRAMES/frame_0433.jpeg
  ./BACKGROUND_FRAMES/frame_0434.jpeg
  ./BACKGROUND_FRAMES/frame_0435.jpeg
  ./BACKGROUND_FRAMES/frame_0436.jpeg
  ./BACKGROUND_FRAMES/frame_0437.jpeg
  ./BACKGROUND_FRAMES/frame_0438.jpeg
  ./BACKGROUND_FRAMES/frame_0439.jpeg
  ./BACKGROUND_FRAMES/frame_0440.jpeg
  ./BACKGROUND_FRAMES/frame_0441.jpeg
  ./BACKGROUND_FRAMES/frame_0442.jpeg
  ./BACKGROUND_FRAMES/frame_0443.jpeg
  ./BACKGROUND_FRAMES/frame_0444.jpeg
  ./BACKGROUND_FRAMES/frame_0445.jpeg
  ./BACKGROUND_FRAMES/frame_0446.jpeg
  ./BACKGROUND_FRAMES/frame_0447.jpeg
  ./BACKGROUND_FRAMES/frame_0448.jpeg
  ./BACKGROUND_FRAMES/frame_0449.jpeg
  ./BACKGROUND_FRAMES/frame_0450.jpeg
  ./BACKGROUND_FRAMES/frame_0451.jpeg
  ./BACKGROUND_FRAMES/frame_0452.jpeg
  ./BACKGROUND_FRAMES/frame_0453.jpeg
  ./BACKGROUND_FRAMES/frame_0454.jpeg
  ./BACKGROUND_FRAMES/frame_0455.jpeg
  ./BACKGROUND_FRAMES/frame_0456.jpeg
  ./BACKGROUND_FRAMES/frame_0457.jpeg
  ./BACKGROUND_FRAMES/frame_0458.jpeg
  ./BACKGROUND_FRAMES/frame_0459.jpeg
  ./BACKGROUND_FRAMES/frame_0460.jpeg
  ./BACKGROUND_FRAMES/frame_0461.jpeg
  ./BACKGROUND_FRAMES/frame_0462.jpeg
  ./BACKGROUND_FRAMES/frame_0463.jpeg
  ./BACKGROUND_FRAMES/frame_0464.jpeg
  ./BACKGROUND_FRAMES/frame_0465.jpeg
  ./BACKGROUND_FRAMES/frame_0466.jpeg
  ./BACKGROUND_FRAMES/frame_0467.jpeg
  ./BACKGROUND_FRAMES/frame_0468.jpeg
  ./BACKGROUND_FRAMES/frame_0469.jpeg
  ./BACKGROUND_FRAMES/frame_0470.jpeg
  ./BACKGROUND_FRAMES/frame_0471.jpeg
  ./BACKGROUND_FRAMES/frame_0472.jpeg
  ./BACKGROUND_FRAMES/frame_0473.jpeg
  ./BACKGROUND_FRAMES/frame_0474.jpeg
  ./BACKGROUND_FRAMES/frame_0475.jpeg
  ./BACKGROUND_FRAMES/frame_0476.jpeg
  ./BACKGROUND_FRAMES/frame_0477.jpeg
  ./BACKGROUND_FRAMES/frame_0478.jpeg
  ./BACKGROUND_FRAMES/frame_0479.jpeg
  ./BACKGROUND_FRAMES/frame_0480.jpeg
  ./BACKGROUND_FRAMES/frame_0481.jpeg
  ./BACKGROUND_FRAMES/frame_0482.jpeg
  ./BACKGROUND_FRAMES/frame_0483.jpeg
  ./BACKGROUND_FRAMES/frame_0484.jpeg
  ./BACKGROUND_FRAMES/frame_0485.jpeg
  ./BACKGROUND_FRAMES/frame_0486.jpeg
  ./BACKGROUND_FRAMES/frame_0487.jpeg
  ./BACKGROUND_FRAMES/frame_0488.jpeg
  ./BACKGROUND_FRAMES/frame_0489.jpeg
  ./BACKGROUND_FRAMES/frame_0490.jpeg
  ./BACKGROUND_FRAMES/frame_0491.jpeg
  ./BACKGROUND_FRAMES/frame_0492.jpeg
  ./BACKGROUND_FRAMES/frame_0493.jpeg
  ./BACKGROUND_FRAMES/frame_0494.jpeg
  ./BACKGROUND_FRAMES/frame_0495.jpeg
  ./BACKGROUND_FRAMES/frame_0496.jpeg
  ./BACKGROUND_FRAMES/frame_0497.jpeg
  ./BACKGROUND_FRAMES/frame_0498.jpeg
  ./BACKGROUND_FRAMES/frame_0499.jpeg
  ./BACKGROUND_FRAMES/frame_0500.jpeg
  ./BACKGROUND_FRAMES/frame_0501.jpeg
  ./BACKGROUND_FRAMES/frame_0502.jpeg
  ./BACKGROUND_FRAMES/frame_0503.jpeg
  ./BACKGROUND_FRAMES/frame_0504.jpeg
  ./BACKGROUND_FRAMES/frame_0505.jpeg
  ./BACKGROUND_FRAMES/frame_0506.jpeg
  ./BACKGROUND_FRAMES/frame_0507.jpeg
  ./BACKGROUND_FRAMES/frame_0508.jpeg
  ./BACKGROUND_FRAMES/frame_0509.jpeg
  ./BACKGROUND_FRAMES/frame_0510.jpeg
  ./BACKGROUND_FRAMES/frame_0511.jpeg
  ./BACKGROUND_FRAMES/frame_0512.jpeg
  ./BACKGROUND_FRAMES/frame_0513.jpeg
  ./BACKGROUND_FRAMES/frame_0514.jpeg
  ./BACKGROUND_FRAMES/frame_0515.jpeg
  ./BACKGROUND_FRAMES/frame_0516.jpeg
  ./BACKGROUND_FRAMES/frame_0517.jpeg
  ./BACKGROUND_FRAMES/frame_0518.jpeg
  ./BACKGROUND_FRAMES/frame_0519.jpeg
  ./BACKGROUND_FRAMES/frame_0520.jpeg
  ./BACKGROUND_FRAMES/frame_0521.jpeg
  ./BACKGROUND_FRAMES/frame_0522.jpeg
  ./BACKGROUND_FRAMES/frame_0523.jpeg
  ./BACKGROUND_FRAMES/frame_0524.jpeg
  ./BACKGROUND_FRAMES/frame_0525.jpeg
  ./BACKGROUND_FRAMES/frame_0526.jpeg
  ./BACKGROUND_FRAMES/frame_0527.jpeg
  ./BACKGROUND_FRAMES/frame_0528.jpeg
  ./BACKGROUND_FRAMES/frame_0529.jpeg
  ./BACKGROUND_FRAMES/frame_0530.jpeg
  ./BACKGROUND_FRAMES/frame_0531.jpeg
  ./BACKGROUND_FRAMES/frame_0532.jpeg
  ./BACKGROUND_FRAMES/frame_0533.jpeg
  ./BACKGROUND_FRAMES/frame_0534.jpeg
  ./BACKGROUND_FRAMES/frame_0535.jpeg
  ./BACKGROUND_FRAMES/frame_0536.jpeg
  ./BACKGROUND_FRAMES/frame_0537.jpeg
  ./BACKGROUND_FRAMES/frame_0538.jpeg
  ./BACKGROUND_FRAMES/frame_0539.jpeg
  ./BACKGROUND_FRAMES/frame_0540.jpeg
  ./BACKGROUND_FRAMES/frame_0541.jpeg
  ./BACKGROUND_FRAMES/frame_0542.jpeg
  ./BACKGROUND_FRAMES/frame_0543.jpeg
  ./BACKGROUND_FRAMES/frame_0544.jpeg
  ./BACKGROUND_FRAMES/frame_0545.jpeg
  ./BACKGROUND_FRAMES/frame_0546.jpeg
  ./BACKGROUND_FRAMES/frame_0547.jpeg
  ./BACKGROUND_FRAMES/frame_0548.jpeg
  ./BACKGROUND_FRAMES/frame_0549.jpeg
  ./BACKGROUND_FRAMES/frame_0550.jpeg
  ./BACKGROUND_FRAMES/frame_0551.jpeg
  ./BACKGROUND_FRAMES/frame_0552.jpeg
  ./BACKGROUND_FRAMES/frame_0553.jpeg
  ./BACKGROUND_FRAMES/frame_0554.jpeg
  ./BACKGROUND_FRAMES/frame_0555.jpeg
  ./BACKGROUND_FRAMES/frame_0556.jpeg
  ./BACKGROUND_FRAMES/frame_0557.jpeg
  ./BACKGROUND_FRAMES/frame_0558.jpeg
  ./BACKGROUND_FRAMES/frame_0559.jpeg
  ./BACKGROUND_FRAMES/frame_0560.jpeg
  ./BACKGROUND_FRAMES/frame_0561.jpeg
  ./BACKGROUND_FRAMES/frame_0562.jpeg
  ./BACKGROUND_FRAMES/frame_0563.jpeg
  ./BACKGROUND_FRAMES/frame_0564.jpeg
  ./BACKGROUND_FRAMES/frame_0565.jpeg
  ./BACKGROUND_FRAMES/frame_0566.jpeg
  ./BACKGROUND_FRAMES/frame_0567.jpeg
  ./BACKGROUND_FRAMES/frame_0568.jpeg
  ./BACKGROUND_FRAMES/frame_0569.jpeg
  ./BACKGROUND_FRAMES/frame_0570.jpeg
  ./BACKGROUND_FRAMES/frame_0571.jpeg
  ./BACKGROUND_FRAMES/frame_0572.jpeg
  ./BACKGROUND_FRAMES/frame_0573.jpeg
  ./BACKGROUND_FRAMES/frame_0574.jpeg
  ./BACKGROUND_FRAMES/frame_0575.jpeg
  ./BACKGROUND_FRAMES/frame_0576.jpeg
  ./BACKGROUND_FRAMES/frame_0577.jpeg
  ./BACKGROUND_FRAMES/frame_0578.jpeg
  ./BACKGROUND_FRAMES/frame_0579.jpeg
  ./BACKGROUND_FRAMES/frame_0580.jpeg
  ./BACKGROUND_FRAMES/frame_0581.jpeg
  ./BACKGROUND_FRAMES/frame_0582.jpeg
  ./BACKGROUND_FRAMES/frame_0583.jpeg
  ./BACKGROUND_FRAMES/frame_0584.jpeg
  ./BACKGROUND_FRAMES/frame_0585.jpeg
  ./BACKGROUND_FRAMES/frame_0586.jpeg
  ./BACKGROUND_FRAMES/frame_0587.jpeg
  ./BACKGROUND_FRAMES/frame_0588.jpeg
  ./BACKGROUND_FRAMES/frame_0589.jpeg
  ./BACKGROUND_FRAMES/frame_0590.jpeg
  ./BACKGROUND_FRAMES/frame_0591.jpeg
  ./BACKGROUND_FRAMES/frame_0592.jpeg
  ./BACKGROUND_FRAMES/frame_0593.jpeg
  ./BACKGROUND_FRAMES/frame_0594.jpeg
  ./BACKGROUND_FRAMES/frame_0595.jpeg
  ./BACKGROUND_FRAMES/frame_0596.jpeg
  ./BACKGROUND_FRAMES/frame_0597.jpeg
  ./BACKGROUND_FRAMES/frame_0598.jpeg
  ./BACKGROUND_FRAMES/frame_0599.jpeg
  ./BACKGROUND_FRAMES/frame_0600.jpeg
  ./BACKGROUND_FRAMES/frame_0601.jpeg
  ./BACKGROUND_FRAMES/frame_0602.jpeg
  ./BACKGROUND_FRAMES/frame_0603.jpeg
  ./BACKGROUND_FRAMES/frame_0604.jpeg
  ./BACKGROUND_FRAMES/frame_0605.jpeg
  ./BACKGROUND_FRAMES/frame_0606.jpeg
  ./BACKGROUND_FRAMES/frame_0607.jpeg
  ./BACKGROUND_FRAMES/frame_0608.jpeg
  ./BACKGROUND_FRAMES/frame_0609.jpeg
  ./BACKGROUND_FRAMES/frame_0610.jpeg
  ./BACKGROUND_FRAMES/frame_0611.jpeg
 `;
  return data.split("\n")[index];
}

const frameCount = 611;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `#canvas-div canvas`,
    start: `top top`,
    end: `550% top`,
    scroller: `#main-wrapper`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#canvas-div canvas",
  pin: true,
  // markers: true,
  scroller: `#main-wrapper`,
  start: `top top`,
  end: '550% top'
});
}
canvas()


gsap.to("#page1",{
  scrollTrigger:{
    trigger: "#page1",
    scroller: "#main-wrapper",
    start: "top top",
    end: "30% top",
    // markers: true,
    scrub: 2,
    pin: true
  }
})

gsap.from("#page-1-text", {
  filter: "blur(20px)", 
  y: 50,               
  duration: 1,          
  ease: "power2.out"
});



var page2_tl = gsap.timeline({
  scrollTrigger:{
    trigger: "#page2",
    scroller: "#main-wrapper",
    start: "top top",
    end: "50% -5%",
    // markers: true,
    scrub: 2,
    pin: true
  }
})

page2_tl
.to('#page2-layer-upper',{
  top: '-50%',
  
},"about-anim")
.to('#page2-layer-bottom',{
  bottom: '-50%'
},"about-anim")


.from('#content',{
  filter: "blur(5px)", 
  y: 50,               
  duration: 1,          
  ease: "power2.out"
},"about-anim")


var spans = document.querySelectorAll('#page3-content span');

spans.forEach(span => {
  gsap.from(span,{
    filter: "blur(5px)", 
  y: 50,               
  // duration: 1,          
  ease: "power2.out",
  scrollTrigger: {
    trigger: span,
    scroller: "#main-wrapper",
    start: "top 90%",
    end: "30% 80%",
    // markers: true,
    scrub: 2,
    // pin: true
  }
  })
});


var page4_tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#page4",
    scroller: "#main-wrapper",
    start: "-10% top",
    end: "60% top",
    // markers: true,
    scrub: 2,
    pin: true
  }
})

page4_tl
.from('#project_1',{
  y: "150%",
  scale: 1.5
})
.from("#project_2", {
  y: "150%",
  rotation: '-2',
  transformOrigin: "center center",
  duration: 2,
  ease: "power2.out"
})
.from("#project_3", {
  y: "150%",
  rotation: '2',
  transformOrigin: "center center",
  duration: 2,
  ease: "power2.out"
})

