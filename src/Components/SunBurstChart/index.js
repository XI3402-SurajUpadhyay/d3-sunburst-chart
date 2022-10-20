import React, { useEffect } from "react";

import  SunburstChart from 'chartjs-chart-sunburst-extend'
const SunBurstChartComponent = () => {
  const randomizeData = () => {
    return [
      { parentId: null, id: 0, value: 100000 },
      { parentId: 0, id: 1, value: 48295.214197321526 },
      { parentId: 1, id: 2, value: 14527.294366952563 },
      { parentId: 2, id: 3, value: 3722.0533292340638 },
      { parentId: 3, id: 4, value: 1073.405995279867 },
      { parentId: 4, id: 5, value: 661.5167209749275 },
      { parentId: 4, id: 6, value: 229.29921303627629 },
      { parentId: 4, id: 7, value: 182.5900612686632 },
      { parentId: 3, id: 8, value: 300.406693783735 },
      { parentId: 3, id: 9, value: 766.5886730823781 },
      { parentId: 3, id: 10, value: 444.11098082388537 },
      { parentId: 3, id: 11, value: 570.2518766289575 },
      { parentId: 3, id: 12, value: 567.2891096352408 },
      { parentId: 2, id: 13, value: 1495.9255798204736 },
      { parentId: 2, id: 14, value: 1282.6312564478808 },
      { parentId: 2, id: 15, value: 1842.1986724544004 },
      { parentId: 2, id: 16, value: 3896.2471776015345 },
      { parentId: 2, id: 17, value: 2167.0688422722305 },
      { parentId: 17, id: 18, value: 1199.9188283471178 },
      { parentId: 17, id: 19, value: 503.1061655310838 },
      { parentId: 17, id: 20, value: 464.043848394029 },
      { parentId: 2, id: 21, value: 121.1695091219799 },
      { parentId: 21, id: 22, value: 58.95672326710645 },
      { parentId: 21, id: 23, value: 48.14036737249971 },
      { parentId: 23, id: 24, value: 23.730175163510722 },
      { parentId: 23, id: 25, value: 20.61767365725084 },
      { parentId: 25, id: 26, value: 8.404082620917679 },
      { parentId: 25, id: 27, value: 10.722274415978326 },
      { parentId: 25, id: 28, value: 1.4913166203548354 },
      { parentId: 23, id: 29, value: 3.7925185517381426 },
      { parentId: 29, id: 30, value: 2.349143025318865 },
      { parentId: 29, id: 31, value: 1.1408722435608496 },
      { parentId: 29, id: 32, value: 0.30250328285842787 },
      { parentId: 21, id: 33, value: 14.072418482373731 },
      { parentId: 1, id: 34, value: 2077.962639885126 },
      { parentId: 1, id: 35, value: 9331.095112174069 },
      { parentId: 1, id: 36, value: 7269.843242873346 },
      { parentId: 1, id: 37, value: 10907.90079057446 },
      { parentId: 1, id: 38, value: 4181.118044861962 },
      { parentId: 0, id: 39, value: 19516.19626889308 },
      { parentId: 39, id: 40, value: 9315.483481617175 },
      { parentId: 40, id: 41, value: 1815.0059180408552 },
      { parentId: 40, id: 42, value: 539.8467866292422 },
      { parentId: 40, id: 43, value: 1950.068076243609 },
      { parentId: 40, id: 44, value: 1383.3514912451476 },
      { parentId: 40, id: 45, value: 415.46081289841095 },
      { parentId: 40, id: 46, value: 904.4370745601708 },
      { parentId: 46, id: 47, value: 330.38529901205857 },
      { parentId: 47, id: 48, value: 101.42883716082953 },
      { parentId: 47, id: 49, value: 51.68308972055745 },
      { parentId: 47, id: 50, value: 84.75125822365726 },
      { parentId: 47, id: 51, value: 78.29847439763182 },
      { parentId: 47, id: 52, value: 14.223639509382501 },
      { parentId: 46, id: 53, value: 196.5356985722669 },
      { parentId: 46, id: 54, value: 158.422285017559 },
      { parentId: 46, id: 55, value: 115.00149883983062 },
      { parentId: 46, id: 56, value: 104.0922931184557 },
      { parentId: 56, id: 57, value: 22.008470932298504 },
      { parentId: 57, id: 58, value: 14.334604701230194 },
      { parentId: 57, id: 59, value: 7.598379839638901 },
      { parentId: 57, id: 60, value: 0.07548639142941038 },
      { parentId: 56, id: 61, value: 20.723469389130408 },
      { parentId: 56, id: 62, value: 30.873814638777255 },
      { parentId: 56, id: 63, value: 18.174180829455608 },
      { parentId: 56, id: 64, value: 12.312357328793922 },
      { parentId: 40, id: 65, value: 1696.4421654374573 },
      { parentId: 65, id: 66, value: 354.449115998396 },
      { parentId: 65, id: 67, value: 606.2290444937461 },
      { parentId: 67, id: 68, value: 217.05491904070146 },
      { parentId: 67, id: 69, value: 86.26983247876392 },
      { parentId: 67, id: 70, value: 240.29954645996906 },
      { parentId: 67, id: 71, value: 62.60474651431164 },
      { parentId: 65, id: 72, value: 325.83257611647787 },
      { parentId: 65, id: 73, value: 207.43469743103307 },
      { parentId: 65, id: 74, value: 202.49673139780427 },
      { parentId: 40, id: 75, value: 610.8711565622818 },
      { parentId: 75, id: 76, value: 164.21088814640564 },
      { parentId: 75, id: 77, value: 37.28563942042048 },
      { parentId: 75, id: 78, value: 79.55729996419606 },
      { parentId: 75, id: 79, value: 121.31517803497064 },
      { parentId: 75, id: 80, value: 54.67073981300577 },
      { parentId: 75, id: 81, value: 141.11634243018733 },
      { parentId: 75, id: 82, value: 12.715068753095935 },
      { parentId: 82, id: 83, value: 3.820125046168643 },
      { parentId: 82, id: 84, value: 3.9498169550079463 },
      { parentId: 82, id: 85, value: 3.4909229721453148 },
      { parentId: 82, id: 86, value: 1.4542037797740304 },
      { parentId: 39, id: 87, value: 8010.984936804458 },
      { parentId: 39, id: 88, value: 2189.727850471447 },
      { parentId: 0, id: 89, value: 32188.5895337854 },
      { parentId: 89, id: 90, value: 5636.253163472722 },
      { parentId: 89, id: 91, value: 7604.3876191666695 },
      { parentId: 91, id: 92, value: 4963.891016164331 },
      { parentId: 91, id: 93, value: 2119.040772471866 },
      { parentId: 93, id: 94, value: 1038.7050627349868 },
      { parentId: 93, id: 95, value: 604.3178244742467 },
      { parentId: 95, id: 96, value: 105.87627253628926 },
      { parentId: 95, id: 97, value: 107.36436486345497 },
      { parentId: 95, id: 98, value: 26.345184777575025 },
      { parentId: 95, id: 99, value: 105.39327084464935 },
      { parentId: 95, id: 100, value: 106.19921334600514 },
      { parentId: 95, id: 101, value: 4.736182390199321 },
      { parentId: 95, id: 102, value: 126.26939766698572 },
      { parentId: 95, id: 103, value: 22.13393804908788 },
      { parentId: 93, id: 104, value: 476.0178852626329 },
      { parentId: 91, id: 105, value: 521.4558305304733 },
      { parentId: 105, id: 106, value: 92.83063219989293 },
      { parentId: 106, id: 107, value: 24.792211152437016 },
      { parentId: 106, id: 108, value: 43.84068430008982 },
      { parentId: 106, id: 109, value: 17.97539339273978 },
      { parentId: 106, id: 110, value: 6.2223433546263145 },
      { parentId: 105, id: 111, value: 91.09851957207343 },
      { parentId: 111, id: 112, value: 12.389044994408861 },
      { parentId: 112, id: 113, value: 3.8847211867067113 },
      { parentId: 112, id: 114, value: 2.509818313446482 },
      { parentId: 112, id: 115, value: 1.6316530137351033 },
      { parentId: 112, id: 116, value: 3.226458609081893 },
      { parentId: 112, id: 117, value: 1.1363938714386728 },
      { parentId: 111, id: 118, value: 13.390436810122875 },
      { parentId: 111, id: 119, value: 10.031601443656916 },
      { parentId: 111, id: 120, value: 18.945712654137097 },
      { parentId: 111, id: 121, value: 2.7874246571427137 },
      { parentId: 111, id: 122, value: 15.118203518829349 },
      { parentId: 122, id: 123, value: 5.7453312948535915 },
      { parentId: 122, id: 124, value: 2.4817985714474773 },
      { parentId: 122, id: 125, value: 4.711836042088991 },
      { parentId: 122, id: 126, value: 2.179237610439289 },
      { parentId: 126, id: 127, value: 0.4436036256643001 },
      { parentId: 126, id: 128, value: 0.344156035054811 },
      { parentId: 128, id: 129, value: 0.04821710736886057 },
      { parentId: 128, id: 130, value: 0.07648939722750348 },
      { parentId: 128, id: 131, value: 0.01981792586329145 },
      { parentId: 128, id: 132, value: 0.03130604713503103 },
      { parentId: 128, id: 133, value: 0.05546917631385362 },
      { parentId: 128, id: 134, value: 0.0670179782872911 },
      { parentId: 128, id: 135, value: 0.030217286124102915 },
      { parentId: 128, id: 136, value: 0.015621116734876848 },
      { parentId: 126, id: 137, value: 0.1535985049207277 },
      { parentId: 126, id: 138, value: 0.353640499206741 },
      { parentId: 126, id: 139, value: 0.17682799238473568 },
      { parentId: 126, id: 140, value: 0.4047315559808627 },
      { parentId: 126, id: 141, value: 0.0520702519794123 },
      { parentId: 126, id: 142, value: 0.2506091452476985 },
      { parentId: 111, id: 143, value: 13.657515092010152 },
      { parentId: 111, id: 144, value: 4.778580401765463 },
      { parentId: 144, id: 145, value: 1.0115640435682995 },
      { parentId: 144, id: 146, value: 0.6989599898667676 },
      { parentId: 144, id: 147, value: 1.0621969593563712 },
      { parentId: 144, id: 148, value: 1.2010562899656434 },
      { parentId: 148, id: 149, value: 0.6245279043861253 },
      { parentId: 148, id: 150, value: 0.2030949977091119 },
      { parentId: 148, id: 151, value: 0.3734333878704063 },
      { parentId: 151, id: 152, value: 0.07305662863666554 },
      { parentId: 151, id: 153, value: 0.06251995136373596 },
      { parentId: 151, id: 154, value: 0.04982297278295475 },
      { parentId: 151, id: 155, value: 0.04472538088688898 },
      { parentId: 151, id: 156, value: 0.024508592942999147 },
      { parentId: 151, id: 157, value: 0.04078722538631917 },
      { parentId: 157, id: 158, value: 0.015998333605227278 },
      { parentId: 157, id: 159, value: 0.024659285481433882 },
      { parentId: 157, id: 160, value: 0.00012960629965800934 },
      { parentId: 160, id: 161, value: 0.000026567167426113858 },
      { parentId: 160, id: 162, value: 0.00002060116170051697 },
      { parentId: 160, id: 163, value: 0.000011888334170614044 },
      { parentId: 160, id: 164, value: 0.000007434360193628083 },
      { parentId: 160, id: 165, value: 0.000027186002689126794 },
      { parentId: 160, id: 166, value: 0.000017634172378908633 },
      { parentId: 160, id: 167, value: 0.000014434915258706614 },
      { parentId: 160, id: 168, value: 0.0000038601858403943415 },
      { parentId: 151, id: 169, value: 0.0634155256946409 },
      { parentId: 151, id: 170, value: 0.014597110176201855 },
      { parentId: 144, id: 171, value: 0.47424242981876896 },
      { parentId: 144, id: 172, value: 0.3305606891896127 },
      { parentId: 105, id: 173, value: 90.93164649554143 },
      { parentId: 105, id: 174, value: 36.297544971046364 },
      { parentId: 105, id: 175, value: 106.52982811080133 },
      { parentId: 175, id: 176, value: 36.51431623621899 },
      { parentId: 175, id: 177, value: 24.26624963100933 },
      { parentId: 175, id: 178, value: 20.917874057700818 },
      { parentId: 175, id: 179, value: 24.831388185872196 },
      { parentId: 105, id: 180, value: 34.83986104875144 },
      { parentId: 105, id: 181, value: 68.92779813236649 },
      { parentId: 181, id: 182, value: 17.159705130069504 },
      { parentId: 182, id: 183, value: 2.99284070139526 },
      { parentId: 182, id: 184, value: 1.7453681975591366 },
      { parentId: 182, id: 185, value: 3.710717483962473 },
      { parentId: 182, id: 186, value: 1.1005200685765586 },
      { parentId: 182, id: 187, value: 2.494538002453244 },
      { parentId: 182, id: 188, value: 2.5163337349573283 },
      { parentId: 182, id: 189, value: 0.7947955435071661 },
      { parentId: 182, id: 190, value: 1.8045913976583374 },
      { parentId: 181, id: 191, value: 3.389502896280182 },
      { parentId: 181, id: 192, value: 6.58405045762832 },
      { parentId: 181, id: 193, value: 10.989632097166778 },
      { parentId: 181, id: 194, value: 12.565726876461042 },
      { parentId: 181, id: 195, value: 2.7626300532352452 },
      { parentId: 181, id: 196, value: 11.93674194256984 },
      { parentId: 181, id: 197, value: 3.5398086789555796 },
      { parentId: 197, id: 198, value: 1.1742475659895928 },
      { parentId: 197, id: 199, value: 0.32459653910345343 },
      { parentId: 199, id: 200, value: 0.09236333038656365 },
      { parentId: 199, id: 201, value: 0.0492010359241159 },
      { parentId: 199, id: 202, value: 0.028209233792910002 },
      { parentId: 199, id: 203, value: 0.09128219603680318 },
      { parentId: 199, id: 204, value: 0.01129813416325437 },
      { parentId: 199, id: 205, value: 0.05224260879980632 },
      { parentId: 197, id: 206, value: 0.7863896850554926 },
      { parentId: 197, id: 207, value: 0.11266818990298547 },
      { parentId: 197, id: 208, value: 1.1069550458734336 },
      { parentId: 197, id: 209, value: 0.03495165303062153 },
      { parentId: 89, id: 210, value: 2182.3376237355033 },
      { parentId: 210, id: 211, value: 407.8878140222385 },
      { parentId: 210, id: 212, value: 334.00536917700936 },
      { parentId: 210, id: 213, value: 87.75853328155792 },
      { parentId: 210, id: 214, value: 505.4871362274332 },
      { parentId: 210, id: 215, value: 112.4363957552939 },
      { parentId: 210, id: 216, value: 285.07988315490337 },
      { parentId: 216, id: 217, value: 99.51729823278673 },
      { parentId: 216, id: 218, value: 115.80921904396695 },
      { parentId: 216, id: 219, value: 69.75336587814971 },
      { parentId: 210, id: 220, value: 437.8085627603625 },
      { parentId: 210, id: 221, value: 11.87392935670448 },
      { parentId: 89, id: 222, value: 5042.485717402227 },
      { parentId: 222, id: 223, value: 1286.3199676093723 },
      { parentId: 222, id: 224, value: 586.0639079369605 },
      { parentId: 222, id: 225, value: 835.3175248958241 },
      { parentId: 222, id: 226, value: 523.2645493746649 },
      { parentId: 222, id: 227, value: 934.6629291148814 },
      { parentId: 227, id: 228, value: 139.56214637231992 },
      { parentId: 227, id: 229, value: 177.59873330551912 },
      { parentId: 227, id: 230, value: 79.73185000006512 },
      { parentId: 227, id: 231, value: 83.5443740316459 },
      { parentId: 227, id: 232, value: 134.07104452709473 },
      { parentId: 227, id: 233, value: 125.1035238988257 },
      { parentId: 227, id: 234, value: 106.52349070643308 },
      { parentId: 234, id: 235, value: 64.18983265273893 },
      { parentId: 234, id: 236, value: 11.728409207765898 },
      { parentId: 234, id: 237, value: 30.60524884592825 },
      { parentId: 227, id: 238, value: 88.5277662729779 },
      { parentId: 238, id: 239, value: 16.897041508047792 },
      { parentId: 238, id: 240, value: 13.089707476968211 },
      { parentId: 238, id: 241, value: 23.900546302493318 },
      { parentId: 238, id: 242, value: 15.759567961298774 },
      { parentId: 238, id: 243, value: 10.637105074920086 },
      { parentId: 238, id: 244, value: 8.243797949249721 },
      { parentId: 222, id: 245, value: 814.0860109285751 },
      { parentId: 222, id: 246, value: 62.77082754194919 },
      { parentId: 246, id: 247, value: 16.50434898909645 },
      { parentId: 247, id: 248, value: 4.705822245164307 },
      { parentId: 247, id: 249, value: 1.609855149532562 },
      { parentId: 247, id: 250, value: 1.1485638784776933 },
      { parentId: 247, id: 251, value: 2.444085060071438 },
      { parentId: 247, id: 252, value: 2.889476394494903 },
      { parentId: 247, id: 253, value: 1.842725288525364 },
      { parentId: 253, id: 254, value: 0.6112611821105876 },
      { parentId: 253, id: 255, value: 0.1241335554662757 },
      { parentId: 253, id: 256, value: 0.23797106376026358 },
      { parentId: 253, id: 257, value: 0.5265407956004615 },
      { parentId: 253, id: 258, value: 0.12187677714982006 },
      { parentId: 253, id: 259, value: 0.22094191443795555 },
      { parentId: 247, id: 260, value: 1.8638209728301833 },
      { parentId: 246, id: 261, value: 6.486913208781118 },
      { parentId: 246, id: 262, value: 14.542827295056505 },
      { parentId: 262, id: 263, value: 3.5546639659074026 },
      { parentId: 263, id: 264, value: 1.2853915556217168 },
      { parentId: 263, id: 265, value: 0.833605980893094 },
      { parentId: 265, id: 266, value: 0.41576444132937207 },
      { parentId: 265, id: 267, value: 0.2557829554847137 },
      { parentId: 265, id: 268, value: 0.1620585840790083 },
      { parentId: 263, id: 269, value: 1.1216613170612935 },
      { parentId: 263, id: 270, value: 0.31400511233129835 },
      { parentId: 262, id: 271, value: 0.6471058822811777 },
      { parentId: 271, id: 272, value: 0.3244457092744827 },
      { parentId: 271, id: 273, value: 0.25685694948949983 },
      { parentId: 271, id: 274, value: 0.06580322351719525 },
      { parentId: 262, id: 275, value: 1.272901730509525 },
      { parentId: 262, id: 276, value: 2.046653102066829 },
      { parentId: 276, id: 277, value: 0.5013424826483805 },
      { parentId: 276, id: 278, value: 0.1308371601198489 },
      { parentId: 276, id: 279, value: 0.31103865673213316 },
      { parentId: 276, id: 280, value: 0.44344300060199776 },
      { parentId: 276, id: 281, value: 0.2856033246374897 },
      { parentId: 276, id: 282, value: 0.24677751457613367 },
      { parentId: 276, id: 283, value: 0.1276109627508451 },
      { parentId: 262, id: 284, value: 3.064686190906021 },
      { parentId: 262, id: 285, value: 0.40705827359419267 },
      { parentId: 285, id: 286, value: 0.16711829116382038 },
      { parentId: 285, id: 287, value: 0.12130539692615162 },
      { parentId: 285, id: 288, value: 0.11863458550422064 },
      { parentId: 262, id: 289, value: 3.1233258317601544 },
      { parentId: 262, id: 290, value: 0.4264323180312022 },
      { parentId: 290, id: 291, value: 0.13962482839524568 },
      { parentId: 291, id: 292, value: 0.08260380436521403 },
      { parentId: 291, id: 293, value: 0.04824799077829902 },
      { parentId: 291, id: 294, value: 0.008773033251732634 },
      { parentId: 294, id: 295, value: 0.003384364396802112 },
      { parentId: 294, id: 296, value: 0.004676940658203741 },
      { parentId: 294, id: 297, value: 0.000711728196726782 },
      { parentId: 290, id: 298, value: 0.0417803724677003 },
      { parentId: 290, id: 299, value: 0.09398120618158716 },
      { parentId: 290, id: 300, value: 0.06839600012478075 },
      { parentId: 290, id: 301, value: 0.08264991086188832 },
      { parentId: 301, id: 302, value: 0.05412575397456793 },
      { parentId: 302, id: 303, value: 0.011939545680066575 },
      { parentId: 302, id: 304, value: 0.0056400861815244984 },
      { parentId: 302, id: 305, value: 0.011591004544312215 },
      { parentId: 302, id: 306, value: 0.005614300200806504 },
      { parentId: 302, id: 307, value: 0.011442968020394776 },
      { parentId: 302, id: 308, value: 0.003805236599393412 },
      { parentId: 302, id: 309, value: 0.00409261274806995 },
      { parentId: 301, id: 310, value: 0.005409252243574029 },
      { parentId: 301, id: 311, value: 0.02311490464374636 },
      { parentId: 246, id: 312, value: 5.261105041405483 },
      { parentId: 246, id: 313, value: 17.35318319110232 },
      { parentId: 313, id: 314, value: 7.095542089863937 },
      { parentId: 314, id: 315, value: 3.1988890394281624 },
      { parentId: 314, id: 316, value: 2.5918399562989585 },
      { parentId: 314, id: 317, value: 1.3048130941368161 },
      { parentId: 313, id: 318, value: 2.1418323212701615 },
      { parentId: 313, id: 319, value: 6.831328887582459 },
      { parentId: 313, id: 320, value: 1.2844798923857637 },
      { parentId: 246, id: 321, value: 2.6224498165073147 },
      { parentId: 321, id: 322, value: 1.259761490199011 },
      { parentId: 321, id: 323, value: 0.5306756913431964 },
      { parentId: 321, id: 324, value: 0.832012634965107 },
      { parentId: 89, id: 325, value: 6705.642218992316 },
      { parentId: 325, id: 326, value: 2079.8999545128227 },
      { parentId: 326, id: 327, value: 985.1997970489011 },
      { parentId: 326, id: 328, value: 426.71035428199417 },
      { parentId: 326, id: 329, value: 667.9898031819274 },
      { parentId: 325, id: 330, value: 1254.597034369989 },
      { parentId: 325, id: 331, value: 179.96544292535182 },
      { parentId: 325, id: 332, value: 1071.0884509287864 },
      { parentId: 325, id: 333, value: 1757.8889413208542 },
      { parentId: 325, id: 334, value: 362.2023949345113 },
      { parentId: 89, id: 335, value: 3093.978352207138 },
      { parentId: 89, id: 336, value: 1923.5048388088285 },
    ];
  };
  useEffect(() => {
    var ctx = document.getElementById("chart-area").getContext("2d");

    var config = {
      type: "sunburst",
      data: {
        labels: ["Metrics"],
        datasets: [
          {
            data: randomizeData(),
            borderWidth: 0.5,
            label: "Score",
          },
        ],
      },
      options: {
        responsive: true,
        elements: {
          arc: {
            backgroundColor: "orange",
          },
        },
        legend: {},
        title: {
          display: true,
          text: "Sunburst Chart",
        },
        scaleByMetric: "value",
      },
    };

    new SunburstChart(ctx, config);
  }, []);
  return (
    <div>
      <canvas id="chart-area"></canvas>
    </div>
  );
};

export default SunBurstChartComponent;