import { Button } from "./ui/button";
import { HeroCards } from "./HeroCards";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="relative bg-[#275f44]">
      <section className="relative container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10 z-10">
        <div className="text-center lg:text-start space-y-6">
          <main className="text-5xl md:text-6xl font-bold">
            <h1 className="inline text-white">Building Wealth, </h1>{" "}
            <h2 className="inline text-white">Securing Futures</h2>
          </main>

          <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
            Expert Financial Advice and Customized Plans to Navigate Your
            Financial Journey
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Link href="/Contact">
              <Button className="w-full md:w-1/3">Get Started</Button>
            </Link>
          </div>
        </div>

        {/* Hero cards sections */}
        <div className="z-10">
          <HeroCards />
        </div>
      </section>

      {/* SVG Background */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlnsSvgjs="http://svgjs.dev/svgjs"
        className="absolute top-0 left-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1440 560"
      >
        <g mask='url("#SvgjsMask1004")' fill="none">
          <path
            d="M0 464.96L10 503.71L20 496.52L30 483.52L40 486.32L50 522.18L60 469.03L70 460.81L80 415.85L90 390.13L100 383.29L110 335.84L120 356.43L130 339.06L140 337.66L150 361.02L160 400.37L170 365.16L180 342.69L190 385.68L200 383.06L210 446.58L220 506.33L230 505.41L240 531.1L250 535.7L260 543.44L270 542.56L280 509.09L290 503.02L300 456.84L310 523.78L320 524.24L330 458.5L340 453.63L350 402.87L360 462.4L370 475.92L380 424.67L390 370.73L400 434.26L410 388.85L420 428.38L430 437.09L440 469.34L450 412.34L460 403.02L470 456.06L480 456.65L490 432.46L500 394.18L510 382.67L520 379.25L530 448.91L540 500.43L550 549.41L560 512.82L570 482.17L580 468.64L590 408.22L600 441.53L610 401.22L620 432.4L630 467.61L640 404.81L650 344.73L660 357.36L670 349.56L680 323.76L690 362.5L700 328.79L710 273.87L720 205.88L730 270.5L740 240.91L750 196.61L760 241.49L770 283.2L780 219.02L790 236.94L800 179.68L810 241.4L820 264.32L830 270.58L840 301.39L850 231.76L860 226.48L870 244.59L880 192.28L890 134.86L900 142.93L910 146.29L920 163.53L930 211.56L940 239.26L950 223.95L960 180.12L970 158.01L980 102.53L990 62.86L1000 112.13L1010 66.35L1020 51.82L1030 3.04L1040 27.09L1050 77.21L1060 93.45L1070 44.05L1080 44.02L1090 75.66L1100 31.25L1110 25.9L1120 82.59L1130 115.53L1140 140.84L1150 89.41L1160 102.27L1170 108.39L1180 96.79L1190 137.57L1200 184.13L1210 177.49L1220 194.18L1230 258.65L1240 192.79L1250 208.38L1260 221.01L1270 170.75L1280 127.88L1290 159.04L1300 175.13L1310 146.08L1320 209.38L1330 154.27L1340 122.68L1350 134.06L1360 135.5L1370 170.54L1380 225.59L1390 292.56L1400 261.57L1410 253.13L1420 303.03L1430 257.16L1440 313.87L1440 560L0 560z"
            fill='url("#SvgjsLinearGradient1005")'
          ></path>
        </g>
        <defs>
          <mask id="SvgjsMask1004">
            <rect width="1440" height="560" fill="#ffffff"></rect>
          </mask>
          <linearGradient
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
            id="SvgjsLinearGradient1005"
          >
            <stop
              stopOpacity="0.65"
              stopColor="rgba(15, 157, 88, 1)"
              offset="0"
            ></stop>
            <stop stopOpacity="0" stopColor="#55efa4" offset="0.8"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
