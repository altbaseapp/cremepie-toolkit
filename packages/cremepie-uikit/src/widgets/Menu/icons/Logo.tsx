import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  return (
    <Svg viewBox="0 0 160 32" {...props}>
      <path d="M44.7925 12.0881C44.407 12.0631 44.0209 12.1242 43.6619 12.2669C43.303 12.4096 42.9803 12.6304 42.7172 12.9132C42.2386 13.4643 41.9961 14.2421 41.9961 15.2498C41.9961 16.2575 42.2638 17.0542 42.796 17.6022C43.0779 17.8821 43.415 18.1003 43.7858 18.2429C44.1566 18.3855 44.5531 18.4494 44.9499 18.4304C45.3657 18.4405 45.7798 18.3743 46.1718 18.2351C46.4953 18.1086 46.8108 17.9624 47.1165 17.7974C47.3123 17.958 47.4712 18.1588 47.5826 18.3863C47.6983 18.6367 47.7554 18.9103 47.7495 19.1861C47.7495 19.6648 47.4829 20.071 46.9496 20.4048C46.4143 20.7386 45.605 20.9055 44.5154 20.9055C43.7676 20.9103 43.0238 20.7977 42.311 20.5717C41.6409 20.3631 41.0234 20.013 40.5003 19.5451C39.9672 19.0577 39.5498 18.4574 39.2784 17.7879C38.9633 16.9797 38.8113 16.1171 38.8313 15.2498C38.8154 14.4242 38.9619 13.6035 39.2627 12.8344C39.527 12.1694 39.9282 11.5675 40.4405 11.0678C40.9424 10.5843 41.5414 10.2129 42.1976 9.97823C42.885 9.72919 43.6111 9.60443 44.3422 9.60978C45.4192 9.60978 46.2589 9.78508 46.8614 10.1357C47.464 10.4863 47.7589 10.9376 47.7463 11.4898C47.7533 11.7702 47.6741 12.0461 47.5196 12.2802C47.3804 12.4893 47.2005 12.6682 46.9905 12.8061C46.683 12.6058 46.3572 12.435 46.0175 12.296C45.6265 12.1478 45.2104 12.0772 44.7925 12.0881Z" fill="#89DBC4" />
      <path d="M52.0135 20.5717C51.8318 20.6219 51.6465 20.6577 51.4592 20.6788C51.2004 20.7144 50.9395 20.7323 50.6783 20.7323C50.4452 20.7338 50.2124 20.7159 49.9823 20.6788C49.7958 20.6508 49.6186 20.5785 49.4659 20.4678C49.3239 20.355 49.2151 20.206 49.151 20.0364C49.0646 19.8094 49.025 19.5673 49.0344 19.3247V14.0531C49.028 13.8133 49.0798 13.5756 49.1856 13.3603C49.2899 13.165 49.4323 12.9926 49.6044 12.8533C49.8177 12.6864 50.0516 12.5478 50.3004 12.4408C50.5891 12.3164 50.8858 12.2112 51.1884 12.1259C51.5106 12.0303 51.8388 11.9566 52.1709 11.9054C52.5086 11.8542 52.8497 11.8279 53.1912 11.8267C53.6575 11.7995 54.1215 11.9089 54.5264 12.1416C54.6939 12.2602 54.8273 12.4206 54.9135 12.6068C54.9997 12.7929 55.0356 12.9985 55.0177 13.2029C55.0165 13.3669 54.9932 13.53 54.9484 13.6878C54.9042 13.8361 54.8451 13.9796 54.7721 14.1161C54.5264 14.1161 54.2745 14.1161 54.0163 14.1507C53.7581 14.1854 53.5061 14.2106 53.2605 14.2578C53.0149 14.305 52.7818 14.3554 52.5677 14.4058C52.3772 14.449 52.1915 14.5113 52.0135 14.5916V20.5717Z" fill="#89DBC4" />
      <path d="M60.4277 20.8709C59.775 20.8776 59.1254 20.7798 58.5036 20.5811C57.9342 20.4003 57.4079 20.1045 56.9574 19.712C56.5078 19.3092 56.1539 18.8111 55.9214 18.254C55.6569 17.6014 55.5283 16.9016 55.5435 16.1976C55.5264 15.5139 55.6552 14.8343 55.9214 14.2043C56.1412 13.692 56.4696 13.2335 56.8839 12.8605C57.2982 12.4875 57.7885 12.2089 58.321 12.044C58.8427 11.8746 59.3879 11.7885 59.9365 11.7889C60.5143 11.7822 61.0888 11.8771 61.6338 12.0692C62.1183 12.2448 62.565 12.5109 62.9501 12.8533C63.317 13.1804 63.6101 13.5819 63.8098 14.0311C64.02 14.5016 64.1274 15.0115 64.1248 15.5269C64.1361 15.694 64.1123 15.8616 64.0548 16.0189C63.9973 16.1762 63.9074 16.3197 63.7909 16.4401C63.5259 16.6699 63.1955 16.8108 62.8462 16.8432L58.5068 17.4919C58.5714 17.6839 58.6749 17.8605 58.8109 18.0106C58.9469 18.1607 59.1125 18.2811 59.2972 18.3642C59.7261 18.5631 60.1944 18.6621 60.6671 18.6539C61.128 18.6562 61.587 18.5936 62.0306 18.4681C62.3969 18.3719 62.7486 18.2268 63.0761 18.0367C63.2714 18.1598 63.4361 18.3256 63.5579 18.5216C63.6822 18.7222 63.7487 18.9533 63.75 19.1892C63.7556 19.4357 63.6887 19.6783 63.5577 19.8871C63.4268 20.0959 63.2374 20.2616 63.0131 20.3639C62.6198 20.5708 62.1936 20.7083 61.7535 20.7701C61.3146 20.8361 60.8715 20.8697 60.4277 20.8709ZM59.9365 13.9681C59.6842 13.962 59.4338 14.0115 59.2027 14.1129C59.0111 14.1951 58.8401 14.3188 58.702 14.4751C58.5737 14.6179 58.4752 14.7849 58.4123 14.9663C58.3471 15.1445 58.3078 15.3312 58.2958 15.5206L61.3 15.0262C61.2462 14.7585 61.1122 14.5136 60.9158 14.3239C60.7858 14.2004 60.6318 14.1051 60.4633 14.0439C60.2947 13.9827 60.1154 13.9569 59.9365 13.9681Z" fill="#89DBC4" />
      <path d="M69.6546 11.7889C70.1331 11.7883 70.6092 11.8562 71.0685 11.9904C71.5047 12.1126 71.9132 12.3179 72.2715 12.5951C72.6417 12.3535 73.0404 12.1588 73.4587 12.0156C73.9676 11.8547 74.4995 11.7781 75.0332 11.7889C75.4746 11.7881 75.9141 11.8464 76.3401 11.9621C76.7527 12.073 77.1405 12.2611 77.4832 12.5163C77.8263 12.7812 78.1006 13.1246 78.2831 13.5177C78.5003 13.9949 78.6079 14.5146 78.598 15.0387V20.5717C78.4162 20.6216 78.2309 20.6574 78.0437 20.6788C77.7839 20.7145 77.5219 20.7323 77.2596 20.7323C77.0276 20.7337 76.7959 20.7158 76.5668 20.6788C76.3802 20.6508 76.2031 20.5784 76.0504 20.4678C75.9086 20.3548 75.7998 20.2058 75.7354 20.0363C75.6519 19.8087 75.6134 19.567 75.6221 19.3246V15.1269C75.635 14.9849 75.6146 14.8418 75.5627 14.709C75.5108 14.5762 75.4287 14.4573 75.3229 14.3617C75.0891 14.193 74.8046 14.1097 74.5168 14.1255C74.3348 14.129 74.1551 14.1675 73.9877 14.2389C73.8355 14.2949 73.6931 14.3746 73.5657 14.4751C73.5777 14.5181 73.5841 14.5626 73.5846 14.6073V20.5717C73.3962 20.6202 73.2047 20.656 73.0115 20.6788C72.759 20.714 72.5044 20.7319 72.2494 20.7323C72.0163 20.7338 71.7836 20.7159 71.5535 20.6788C71.3669 20.6508 71.1898 20.5784 71.037 20.4678C70.895 20.355 70.7862 20.2059 70.7221 20.0363C70.6358 19.8094 70.5961 19.5673 70.6056 19.3246V15.1269C70.62 14.9833 70.5988 14.8384 70.5439 14.7049C70.4889 14.5714 70.402 14.4536 70.2907 14.3617C70.0625 14.201 69.7887 14.1182 69.5097 14.1255C69.3237 14.1209 69.1386 14.153 68.9649 14.22C68.8327 14.2752 68.7034 14.3372 68.5776 14.4058V20.5717C68.3959 20.6219 68.2106 20.6577 68.0233 20.6788C67.7646 20.7145 67.5036 20.7324 67.2424 20.7323C67.0104 20.7338 66.7786 20.7159 66.5496 20.6788C66.3622 20.6502 66.1842 20.5779 66.03 20.4678C65.888 20.355 65.7792 20.2059 65.7151 20.0363C65.6315 19.8087 65.593 19.567 65.6017 19.3246V14.0184C65.587 13.7515 65.6576 13.4868 65.8032 13.2627C65.956 13.0576 66.1423 12.8798 66.3543 12.7368C66.8098 12.4297 67.3116 12.198 67.8407 12.0503C68.4301 11.8788 69.0407 11.7908 69.6546 11.7889Z" fill="#89DBC4" />
      <path d="M84.9401 20.8708C84.2874 20.878 83.6377 20.7802 83.0161 20.5811C82.446 20.4017 81.9194 20.1057 81.4699 19.712C81.0183 19.3109 80.664 18.8123 80.4338 18.2539C80.1678 17.6018 80.0391 16.9017 80.0559 16.1976C80.0372 15.5137 80.1661 14.8338 80.4338 14.2042C80.6598 13.6803 80.9985 13.2125 81.4258 12.8344C81.8318 12.4782 82.3066 12.2092 82.8208 12.0439C83.3426 11.8748 83.8878 11.7887 84.4363 11.7889C85.0141 11.7819 85.5887 11.8768 86.1336 12.0691C86.6218 12.243 87.0719 12.5092 87.4594 12.8533C87.8274 13.1801 88.1216 13.5816 88.3223 14.031C88.5325 14.5015 88.6398 15.0115 88.6372 15.5268C88.6485 15.6939 88.6247 15.8616 88.5672 16.0189C88.5097 16.1762 88.4198 16.3197 88.3034 16.4401C88.043 16.6676 87.7184 16.8084 87.3744 16.8431L83.0349 17.4919C83.0985 17.6844 83.2016 17.8615 83.3378 18.0117C83.4739 18.162 83.64 18.282 83.8254 18.3642C84.254 18.5637 84.7225 18.6627 85.1952 18.6539C85.6552 18.6559 86.1131 18.5934 86.5556 18.4681C86.9221 18.3725 87.2738 18.2273 87.6011 18.0366C87.7913 18.1607 87.9507 18.3266 88.0672 18.5216C88.1626 18.6758 88.2244 18.8484 88.2485 19.0282C88.2726 19.2079 88.2585 19.3907 88.2071 19.5646C88.1556 19.7385 88.0681 19.8996 87.9501 20.0373C87.8321 20.1751 87.6863 20.2863 87.5224 20.3638C87.1292 20.5713 86.703 20.7087 86.2628 20.77C85.825 20.836 85.3829 20.8697 84.9401 20.8708ZM84.4457 13.968C84.1961 13.9609 83.9479 14.0082 83.7183 14.1066C83.5276 14.1904 83.3569 14.3139 83.2176 14.4687C83.0892 14.6115 82.9907 14.7786 82.9279 14.96C82.8622 15.1379 82.8239 15.3248 82.8145 15.5142L85.8187 15.0198C85.7624 14.7524 85.6275 14.5079 85.4314 14.3176C85.3001 14.1944 85.1448 14.0998 84.9752 14.0396C84.8055 13.9795 84.6253 13.9551 84.4457 13.968Z" fill="#89DBC4" />
      <path d="M93.3734 20.5213C93.1732 20.5686 92.9702 20.6033 92.7656 20.6252C92.4952 20.6601 92.2228 20.6779 91.95 20.6787C91.7113 20.6811 91.4729 20.66 91.2383 20.6158C91.0513 20.5822 90.8739 20.5081 90.7187 20.3985C90.573 20.2854 90.4635 20.1321 90.4038 19.9576C90.3254 19.7201 90.2892 19.4707 90.2968 19.2207V10.9449C90.2903 10.841 90.3051 10.7368 90.3403 10.6388C90.3755 10.5408 90.4304 10.451 90.5015 10.3749C90.659 10.2297 90.8474 10.122 91.0525 10.06C91.4947 9.90742 91.9518 9.80187 92.4161 9.74512C92.9257 9.67948 93.439 9.64687 93.9529 9.6475C95.5673 9.6475 96.8028 9.99285 97.6593 10.6835C98.0773 11.0173 98.4113 11.4445 98.6344 11.9306C98.8575 12.4168 98.9636 12.9485 98.9441 13.4831C98.9518 14.0143 98.8588 14.5421 98.6702 15.0387C98.4942 15.4927 98.2175 15.9008 97.8609 16.2322C97.4719 16.5852 97.011 16.8495 96.5099 17.0069C95.8984 17.1968 95.2606 17.2882 94.6205 17.2777H93.3608L93.3734 20.5213ZM94.2867 14.8813C94.6935 14.907 95.096 14.7851 95.4203 14.538C95.5604 14.4026 95.6685 14.2376 95.7366 14.0551C95.8047 13.8726 95.8311 13.6771 95.814 13.4831C95.8264 13.2944 95.7973 13.1052 95.7287 12.9289C95.6602 12.7526 95.5538 12.5935 95.4172 12.4628C95.073 12.2012 94.6455 12.0736 94.2142 12.1038C94.0284 12.1038 93.871 12.1038 93.7482 12.1038C93.6213 12.1095 93.495 12.1242 93.3703 12.1479V14.8718L94.2867 14.8813Z" fill="#89DBC4" />
      <path d="M100.031 9.67904C100.026 9.47099 100.064 9.26418 100.141 9.07101C100.218 8.87783 100.334 8.70226 100.481 8.55482C100.806 8.26073 101.228 8.09787 101.666 8.09787C102.105 8.09787 102.527 8.26073 102.852 8.55482C103.139 8.85878 103.299 9.26099 103.299 9.67904C103.299 10.0971 103.139 10.4993 102.852 10.8033C102.527 11.0974 102.105 11.2602 101.666 11.2602C101.228 11.2602 100.806 11.0974 100.481 10.8033C100.334 10.6561 100.218 10.4806 100.14 10.2874C100.063 10.0941 100.026 9.88716 100.031 9.67904ZM103.161 20.5717C103.032 20.5969 102.846 20.6284 102.588 20.6693C102.336 20.7108 102.081 20.7318 101.826 20.7323C101.592 20.7338 101.36 20.7159 101.13 20.6788C100.943 20.6508 100.766 20.5785 100.613 20.4678C100.471 20.3548 100.363 20.2058 100.298 20.0364C100.215 19.8087 100.176 19.567 100.185 19.3247V12.1731L100.755 12.0786C101.008 12.0371 101.264 12.016 101.52 12.0157C101.752 12.0141 101.984 12.032 102.213 12.0692C102.401 12.0963 102.579 12.1687 102.732 12.2802C102.875 12.3924 102.984 12.5416 103.047 12.7116C103.132 12.939 103.172 13.1807 103.164 13.4233L103.161 20.5717Z" fill="#89DBC4" />
      <path d="M109.588 20.8709C108.935 20.8776 108.286 20.7798 107.664 20.5811C107.094 20.401 106.568 20.1051 106.118 19.712C105.668 19.3092 105.314 18.8111 105.082 18.254C104.817 17.6014 104.689 16.9016 104.704 16.1976C104.687 15.5139 104.815 14.8343 105.082 14.2043C105.301 13.692 105.63 13.2335 106.044 12.8605C106.458 12.4875 106.949 12.2089 107.481 12.044C108.003 11.8746 108.548 11.7885 109.097 11.7889C109.674 11.7822 110.247 11.8771 110.791 12.0692C111.276 12.2444 111.722 12.5105 112.107 12.8533C112.474 13.1804 112.767 13.5819 112.967 14.0311C113.177 14.5016 113.285 15.0115 113.282 15.5269C113.292 15.6939 113.268 15.8613 113.211 16.0185C113.153 16.1757 113.064 16.3193 112.948 16.4401C112.683 16.6693 112.352 16.8102 112.003 16.8432L107.664 17.4919C107.728 17.6842 107.831 17.861 107.967 18.0112C108.103 18.1613 108.269 18.2816 108.454 18.3642C108.883 18.5634 109.352 18.6624 109.824 18.6539C110.285 18.6562 110.744 18.5936 111.188 18.4681C111.554 18.3713 111.905 18.2262 112.233 18.0367C112.426 18.1633 112.588 18.3324 112.706 18.5311C112.802 18.685 112.865 18.8577 112.889 19.0377C112.914 19.2177 112.9 19.4008 112.849 19.575C112.797 19.7492 112.709 19.9105 112.59 20.0481C112.472 20.1857 112.325 20.2966 112.161 20.3733C111.768 20.5806 111.341 20.7181 110.901 20.7795C110.466 20.8417 110.027 20.8723 109.588 20.8709ZM109.097 13.9681C108.846 13.961 108.597 14.0083 108.366 14.1066C108.175 14.1904 108.005 14.3139 107.865 14.4688C107.738 14.6123 107.64 14.7791 107.576 14.96C107.513 15.1388 107.475 15.3252 107.462 15.5143L110.467 15.0199C110.413 14.7515 110.278 14.5062 110.079 14.3176C109.947 14.1923 109.79 14.0965 109.617 14.0362C109.445 13.976 109.263 13.9528 109.081 13.9681H109.097Z" fill="#89DBC4" />
      <path d="M121.466 16.3551C120.952 16.1829 120.484 16.0045 120.062 15.8197C119.668 15.6563 119.3 15.4344 118.972 15.1616C118.671 14.9091 118.428 14.5943 118.261 14.2389C118.079 13.8266 117.992 13.3791 118.006 12.9289C117.991 12.4676 118.089 12.0097 118.289 11.5941C118.49 11.1785 118.788 10.8175 119.158 10.5419C119.922 9.94353 120.997 9.64437 122.383 9.64437C122.853 9.64203 123.323 9.67678 123.787 9.74829C124.172 9.80131 124.547 9.90729 124.902 10.0632C125.195 10.1937 125.452 10.3949 125.648 10.6489C125.825 10.8777 125.917 11.1601 125.91 11.4488C125.919 11.7243 125.845 11.9962 125.699 12.2298C125.564 12.443 125.392 12.6307 125.192 12.784C124.868 12.5917 124.518 12.4465 124.153 12.3526C123.69 12.2263 123.212 12.1649 122.732 12.1699C122.333 12.1423 121.932 12.2182 121.57 12.3904C121.464 12.4389 121.373 12.5162 121.308 12.6135C121.243 12.7109 121.206 12.8244 121.202 12.9415C121.201 13.0269 121.221 13.1113 121.261 13.1867C121.302 13.2621 121.36 13.3262 121.432 13.3729C121.642 13.5128 121.872 13.6191 122.115 13.6878L123.06 13.9869C123.993 14.2456 124.859 14.7033 125.598 15.3285C125.897 15.6135 126.131 15.9596 126.284 16.3433C126.438 16.7269 126.506 17.1391 126.486 17.5517C126.497 18.0191 126.396 18.4824 126.191 18.9026C125.986 19.3229 125.683 19.6879 125.308 19.9671C124.523 20.5843 123.368 20.8918 121.844 20.8897C121.341 20.8928 120.838 20.8486 120.342 20.7575C119.922 20.6856 119.514 20.5563 119.13 20.3733C118.815 20.2282 118.538 20.0127 118.32 19.7435C118.129 19.4946 118.027 19.1884 118.031 18.8743C118.023 18.5572 118.13 18.2479 118.33 18.002C118.51 17.7785 118.731 17.5915 118.982 17.4509C119.348 17.7304 119.754 17.9552 120.185 18.1185C120.681 18.3091 121.209 18.4042 121.74 18.3988C122.162 18.4358 122.585 18.3435 122.953 18.1343C123.059 18.0669 123.147 17.9739 123.208 17.8639C123.269 17.7539 123.301 17.6303 123.302 17.5045C123.307 17.3985 123.283 17.2932 123.234 17.1993C123.185 17.1053 123.112 17.0259 123.022 16.9691C122.773 16.8184 122.508 16.6969 122.232 16.607L121.466 16.3551Z" fill="#89DBC4" />
      <path d="M132.576 20.326C132.379 20.4844 132.152 20.6012 131.909 20.6693C131.583 20.7636 131.246 20.8082 130.907 20.8015C130.479 20.8129 130.051 20.7446 129.648 20.6C129.347 20.509 129.095 20.303 128.945 20.0269C128.763 19.5938 128.613 19.1474 128.498 18.6917C128.328 18.0828 128.16 17.4152 127.994 16.6888C127.831 15.9646 127.679 15.2245 127.531 14.4845C127.383 13.7444 127.27 13.0737 127.188 12.5006C127.611 12.094 128.176 11.8681 128.763 11.8707C129.12 11.8542 129.473 11.9488 129.774 12.1416C129.917 12.2551 130.035 12.3982 130.119 12.5612C130.202 12.7242 130.25 12.9033 130.259 13.0863C130.375 13.9743 130.473 14.7112 130.558 15.2906C130.643 15.8701 130.706 16.3456 130.759 16.714C130.813 17.0825 130.851 17.3627 130.882 17.558C130.914 17.7532 130.936 17.9044 130.961 18.0209H131.03C131.065 17.8351 131.128 17.5611 131.216 17.2053C131.304 16.8494 131.405 16.4401 131.531 15.9834C131.657 15.5268 131.773 15.0387 131.902 14.5002C132.032 13.9617 132.157 13.4358 132.287 12.9099C132.508 12.7864 132.741 12.6861 132.983 12.6108C133.259 12.5338 133.546 12.4977 133.833 12.5037C134.194 12.495 134.553 12.5614 134.888 12.699C135.021 12.7498 135.14 12.83 135.238 12.9336C135.336 13.0372 135.409 13.1615 135.451 13.2973C135.59 13.8095 135.724 14.3102 135.855 14.7994C135.984 15.2844 136.1 15.7441 136.207 16.1503C136.314 16.5566 136.406 16.9345 136.487 17.2588C136.569 17.5832 136.626 17.8351 136.664 18.0209H136.752C136.878 17.1203 137.004 16.1818 137.127 15.2119C137.25 14.242 137.366 13.25 137.47 12.2423C137.677 12.1151 137.902 12.0195 138.138 11.9589C138.367 11.9029 138.603 11.8744 138.84 11.8739C139.198 11.8589 139.553 11.9498 139.86 12.1353C140.001 12.2392 140.112 12.3781 140.183 12.5383C140.254 12.6985 140.281 12.8744 140.263 13.0485C140.254 13.3314 140.226 13.6134 140.178 13.8925C140.118 14.2672 140.043 14.6892 139.948 15.1521C139.854 15.615 139.747 16.1126 139.633 16.629C139.52 17.1455 139.388 17.6399 139.265 18.1217C139.142 18.6035 139.022 19.0349 138.912 19.4222C138.802 19.8096 138.704 20.1056 138.623 20.3166C138.399 20.4856 138.141 20.6029 137.867 20.6598C137.511 20.75 137.145 20.7945 136.777 20.7921C135.795 20.7921 135.215 20.5465 135.039 20.0552C134.966 19.8442 134.881 19.5765 134.774 19.2553C134.667 18.9341 134.557 18.5783 134.441 18.191C134.324 17.8036 134.211 17.4037 134.107 16.988C134.003 16.5723 133.915 16.1724 133.842 15.7851C133.76 16.1944 133.663 16.6196 133.543 17.0447C133.423 17.4698 133.307 17.9138 133.184 18.3295C133.061 18.7452 132.948 19.1262 132.841 19.4695C132.734 19.8127 132.649 20.115 132.576 20.326Z" fill="#89DBC4" />
      <path d="M145.135 11.7889C145.717 11.7826 146.297 11.8471 146.864 11.981C147.343 12.0908 147.797 12.2906 148.202 12.5699C148.565 12.8275 148.857 13.1717 149.052 13.5713C149.261 14.0195 149.363 14.5099 149.351 15.0041V18.9405C149.362 19.2123 149.271 19.4783 149.096 19.6868C148.921 19.8832 148.717 20.052 148.492 20.1875C147.73 20.6431 146.658 20.8709 145.277 20.8709C144.712 20.8776 144.149 20.8194 143.598 20.6977C143.142 20.597 142.708 20.418 142.313 20.1686C141.967 19.945 141.683 19.6373 141.488 19.2743C141.29 18.8843 141.191 18.4519 141.199 18.0146C141.176 17.6702 141.229 17.325 141.354 17.003C141.478 16.6811 141.671 16.3901 141.92 16.1504C142.398 15.719 143.145 15.4481 144.149 15.3442L146.451 15.0986V14.9758C146.459 14.8231 146.421 14.6715 146.341 14.541C146.261 14.4106 146.144 14.3074 146.004 14.2452C145.595 14.0785 145.154 14.0033 144.713 14.0248C144.275 14.024 143.839 14.0715 143.412 14.1665C143.022 14.2511 142.64 14.368 142.269 14.516C142.101 14.3919 141.969 14.2257 141.885 14.0342C141.78 13.8239 141.727 13.592 141.728 13.3572C141.714 13.0969 141.791 12.8399 141.945 12.6297C142.129 12.4213 142.362 12.2613 142.622 12.1636C143.01 12.0225 143.414 11.9284 143.825 11.8834C144.259 11.8239 144.697 11.7923 145.135 11.7889ZM145.277 18.6917C145.497 18.6901 145.717 18.6701 145.935 18.6319C146.122 18.6077 146.303 18.5512 146.47 18.465V17.0605L145.21 17.1644C144.93 17.175 144.654 17.247 144.404 17.3754C144.307 17.4236 144.225 17.4988 144.17 17.5921C144.114 17.6853 144.086 17.7927 144.089 17.9013C144.087 18.0116 144.11 18.121 144.158 18.2206C144.205 18.3202 144.276 18.4071 144.363 18.4744C144.637 18.6427 144.957 18.7189 145.277 18.6917Z" fill="#89DBC4" />
      <path d="M155.095 11.7889C155.758 11.7835 156.418 11.8747 157.054 12.0597C157.626 12.224 158.157 12.5085 158.61 12.8942C159.053 13.2816 159.402 13.7652 159.63 14.3081C159.89 14.953 160.015 15.6442 159.999 16.3393C160.012 17.0089 159.905 17.6755 159.684 18.3075C159.492 18.8388 159.185 19.3215 158.786 19.7214C158.392 20.1073 157.915 20.3981 157.391 20.5717C156.804 20.7672 156.189 20.863 155.571 20.8551C155.093 20.86 154.618 20.7822 154.166 20.6252V23.5412C153.981 23.593 153.793 23.6319 153.603 23.6578C153.341 23.6984 153.077 23.7184 152.812 23.7176C152.58 23.7207 152.348 23.7028 152.12 23.664C151.932 23.6366 151.754 23.5654 151.6 23.4562C151.456 23.3457 151.346 23.1959 151.285 23.0248C151.206 22.7962 151.169 22.5549 151.178 22.3131V13.8799C151.167 13.6073 151.237 13.3377 151.38 13.1052C151.53 12.8918 151.718 12.7073 151.934 12.5604C152.353 12.3029 152.81 12.1137 153.288 11.9999C153.879 11.8523 154.486 11.7814 155.095 11.7889ZM155.133 18.4996C156.34 18.4996 156.943 17.7795 156.941 16.3393C156.941 15.5898 156.792 15.0335 156.494 14.6703C156.335 14.4859 156.136 14.3408 155.912 14.2463C155.688 14.1518 155.445 14.1104 155.203 14.1255C155 14.1222 154.799 14.1487 154.604 14.2042C154.446 14.2501 154.293 14.3112 154.148 14.3869V18.2539C154.294 18.3259 154.447 18.3849 154.604 18.4303C154.776 18.4783 154.954 18.5016 155.133 18.4996Z" fill="#89DBC4" />
      <path d="M24.7518 0.256958H6.59733C2.95372 0.256958 0 3.21068 0 6.85428V25.0087C0 28.6523 2.95372 31.6061 6.59733 31.6061H24.7518C28.3954 31.6061 31.3491 28.6523 31.3491 25.0087V6.85428C31.3491 3.21068 28.3954 0.256958 24.7518 0.256958Z" fill="#89DBC4" />
      <path d="M27.6867 13.2816C27.6867 9.83962 22.2986 7.04953 15.654 7.04953C9.00945 7.04953 3.62452 9.83962 3.62452 13.2816V20.1529C3.62389 20.3923 3.6503 20.631 3.70325 20.8646C4.38345 23.9695 9.47552 26.3943 15.654 26.3943C21.8325 26.3943 26.9277 23.979 27.6205 20.874C27.6719 20.6402 27.6983 20.4017 27.6992 20.1623V13.2847L27.6867 13.2816Z" fill="#FFD087" />
      <path d="M15.6542 26.6841C9.39378 26.6841 4.12852 24.2089 3.41053 20.9276C3.35408 20.6732 3.32557 20.4134 3.3255 20.1529V13.2816C3.3255 9.67904 8.85529 6.7504 15.6542 6.7504C22.453 6.7504 27.986 9.67904 27.986 13.2816V20.1529C27.9859 20.4134 27.9574 20.6732 27.9009 20.9276C27.1829 24.2089 21.9177 26.6841 15.6542 26.6841ZM15.6542 7.34872C9.18594 7.34872 3.92383 10.0097 3.92383 13.2816V20.1529C3.92473 20.3699 3.94794 20.5862 3.99311 20.7985C4.65441 23.8121 9.66145 26.0826 15.6447 26.0826C21.628 26.0826 26.6476 23.8121 27.2963 20.7985C27.3536 20.5876 27.3874 20.3711 27.3971 20.1529V13.2816C27.3971 10.0191 22.1224 7.34872 15.6542 7.34872Z" fill="#7B413B" />
      <path d="M27.6867 13.2816C27.6867 14.621 27.6941 15.9583 27.7087 17.2935C27.7087 18.3988 27.8788 19.7088 26.7042 20.3481C26.6474 20.3788 26.5855 20.399 26.5215 20.4079C25.5233 20.5055 25.391 18.698 24.1881 19.6553C23.5236 20.1843 23.3189 21.1196 22.8529 21.7935C22.4331 22.4478 21.82 22.9552 21.0988 23.2452C19.4172 23.8499 18.419 22.4643 17.005 21.9132C16.5768 21.7286 16.097 21.7019 15.6509 21.8376C15.0935 22.0391 14.7062 22.5525 14.237 22.902C13.0151 23.8058 11.3083 23.4405 10.3101 22.3824C9.81567 21.8565 9.31181 21.2645 8.60957 21.0944C7.69318 20.874 6.7831 21.3652 5.86672 21.0692C4.94817 20.7123 4.20867 20.0056 3.81037 19.1042C3.73794 18.9499 3.66866 18.7893 3.60883 18.6381V13.2847C3.60883 9.84276 8.99376 7.05267 15.6383 7.05267C22.2829 7.05267 27.6867 9.83961 27.6867 13.2816Z" fill="white" />
      <path d="M27.4853 13.2815C27.4853 14.8561 27.5199 16.459 27.5231 18.0461C27.5231 18.6066 27.4979 19.2239 27.1578 19.6962C26.9972 19.9261 26.6885 20.2347 26.3862 20.2095C26.1865 20.167 26.0081 20.0555 25.8824 19.8946C25.6787 19.6268 25.424 19.402 25.1329 19.2333C24.953 19.1758 24.7608 19.168 24.5768 19.2107C24.3928 19.2533 24.2237 19.3449 24.0874 19.4758C23.593 19.86 23.3348 20.4205 23.0671 20.9842C22.7841 21.6159 22.3596 22.174 21.8264 22.6154C21.5591 22.844 21.2447 23.0107 20.9056 23.1038C20.5665 23.1969 20.211 23.214 19.8645 23.1539C19.289 22.9848 18.7476 22.7163 18.2648 22.3604C17.2067 21.6959 16.0289 21.1731 14.933 22.0675C14.3756 22.521 13.9316 23.0122 13.1947 23.1728C12.5373 23.2944 11.858 23.183 11.2738 22.8579C10.6755 22.543 10.2944 21.9982 9.79373 21.551C9.33651 21.105 8.7256 20.8514 8.08692 20.8425C7.29336 20.8425 6.51238 21.1322 5.75031 20.8079C5.11151 20.5109 4.58021 20.0236 4.2293 19.4128C4.01475 19.1392 3.87771 18.8129 3.83251 18.4681V17.706C3.83251 16.27 3.83251 14.834 3.83251 13.3981C3.83251 11.6976 5.03546 10.419 6.39587 9.54674C8.60022 8.12965 11.3053 7.51558 13.8875 7.31719C16.7946 7.05715 19.7238 7.4123 22.4845 8.35953C24.3267 9.02399 26.509 10.164 27.268 12.1038C27.4154 12.4791 27.4923 12.8784 27.4947 13.2815C27.5008 13.3303 27.5245 13.3751 27.5614 13.4075C27.5982 13.44 27.6456 13.4579 27.6947 13.4579C27.7438 13.4579 27.7912 13.44 27.828 13.4075C27.8648 13.3751 27.8885 13.3303 27.8946 13.2815C27.8726 11.285 26.2477 9.81756 24.629 8.89803C22.1728 7.49983 19.2693 6.96449 16.4855 6.87002C13.5695 6.7661 10.5495 7.15973 7.85704 8.32174C6.07151 9.09642 4.0435 10.397 3.53335 12.4156C3.43313 12.9266 3.39717 13.4481 3.42628 13.968V16.5503C3.42628 17.2148 3.41054 17.8824 3.42628 18.5468C3.47664 18.8987 3.61054 19.2335 3.81677 19.523C4.14136 20.1002 4.59914 20.5914 5.15198 20.9559C5.78232 21.3253 6.52511 21.4539 7.24297 21.318C7.65832 21.2394 8.08356 21.2277 8.5026 21.2834C8.91663 21.3873 9.29309 21.6055 9.58904 21.9132C10.0708 22.3698 10.4645 22.8768 11.0597 23.198C11.6086 23.5011 12.2316 23.644 12.8578 23.6105C13.4524 23.5734 14.021 23.3534 14.4859 22.9807C15.185 22.4233 15.7014 21.762 16.6902 22.036C17.9184 22.3666 18.7907 23.5035 20.1007 23.6105C21.4107 23.7176 22.6199 22.6658 23.2183 21.5699C23.5521 20.9401 23.7725 20.2032 24.3614 19.775C24.8117 19.46 25.0825 19.649 25.41 20.0048C25.6264 20.3087 25.945 20.5244 26.3075 20.6126C26.8208 20.6819 27.2932 20.2347 27.5451 19.8285C27.8042 19.3454 27.9293 18.8017 27.9072 18.2539C27.9261 17.5013 27.9072 16.7424 27.8852 15.9898C27.8852 15.0891 27.8852 14.1885 27.8852 13.2878C27.8799 13.239 27.8569 13.1938 27.8206 13.1607C27.7843 13.1276 27.7371 13.1089 27.688 13.1081C27.6389 13.1073 27.5912 13.1245 27.5538 13.1565C27.5165 13.1884 27.4921 13.2329 27.4853 13.2815Z" fill="#7B413B" />
      <path d="M26.1374 10.2269C26.1374 8.85709 25.5579 6.01032 23.7063 5.57575C21.6625 5.09394 20.003 6.49213 19.2188 7.32979C16.8538 6.95612 14.4449 6.95612 12.0799 7.32979C11.2957 6.49213 9.63303 5.09394 7.58928 5.57575C5.74077 6.01032 5.14559 8.85709 5.16134 10.2269C4.17882 11.1276 3.61829 12.1699 3.61829 13.2816C3.61829 16.7235 9.00321 19.5104 15.6478 19.5104C22.2923 19.5104 27.6804 16.7235 27.6804 13.2816C27.6867 12.1699 27.1262 11.1276 26.1374 10.2269Z" fill="white" />
      <path d="M15.6541 19.8506C8.83317 19.8506 3.28448 16.903 3.28448 13.2816C3.28448 12.1542 3.81983 11.0489 4.82753 10.079C4.85588 8.81935 5.37233 5.75214 7.52 5.24514C9.61414 4.75388 11.3146 6.05131 12.209 6.96769C14.4942 6.62758 16.8171 6.62758 19.1023 6.96769C19.9967 6.05131 21.694 4.76333 23.7913 5.24514C25.939 5.75214 26.4554 8.83194 26.4806 10.079C27.4915 11.0489 28.0268 12.1542 28.0268 13.2816C28.0268 16.903 22.475 19.8506 15.6541 19.8506ZM8.43638 5.81827C8.17985 5.81894 7.92421 5.84851 7.6743 5.90645C6.01789 6.29693 5.49199 9.03349 5.50774 10.2238V10.375L5.39752 10.4758C4.45279 11.3386 3.96469 12.3085 3.96469 13.2816C3.96469 16.5283 9.20791 19.1735 15.6541 19.1735C22.1002 19.1735 27.3466 16.5283 27.3466 13.2816C27.3466 12.3085 26.8522 11.3386 25.9138 10.4758L25.8004 10.375V10.2238C25.8004 9.03349 25.2903 6.29693 23.6339 5.90645C21.7664 5.46873 20.2234 6.75355 19.4708 7.56286L19.3479 7.69198L19.1685 7.66364C16.8385 7.30151 14.4665 7.30151 12.1366 7.66364L11.9571 7.69198L11.8342 7.56286C11.1887 6.87007 9.95424 5.81827 8.43638 5.81827Z" fill="#7B413B" />
      <path d="M21.5492 13.7728C22.1457 13.7728 22.6293 13.2892 22.6293 12.6927C22.6293 12.0961 22.1457 11.6125 21.5492 11.6125C20.9526 11.6125 20.4691 12.0961 20.4691 12.6927C20.4691 13.2892 20.9526 13.7728 21.5492 13.7728Z" fill="#7D3D42" />
      <path d="M21.5492 13.798C21.3318 13.798 21.1193 13.7335 20.9386 13.6128C20.7578 13.492 20.617 13.3204 20.5338 13.1196C20.4506 12.9187 20.4288 12.6978 20.4713 12.4846C20.5137 12.2714 20.6183 12.0755 20.772 11.9218C20.9257 11.7681 21.1216 11.6635 21.3348 11.6211C21.5479 11.5787 21.7689 11.6004 21.9697 11.6836C22.1706 11.7668 22.3422 11.9077 22.463 12.0884C22.5837 12.2691 22.6482 12.4816 22.6482 12.699C22.6482 12.9905 22.5324 13.27 22.3263 13.4761C22.1202 13.6822 21.8406 13.798 21.5492 13.798ZM21.5492 11.6377C21.3391 11.6371 21.1336 11.6988 20.9587 11.8151C20.7838 11.9313 20.6473 12.0968 20.5665 12.2907C20.4857 12.4845 20.4642 12.698 20.5048 12.9041C20.5454 13.1101 20.6462 13.2995 20.7945 13.4483C20.9428 13.597 21.1319 13.6984 21.3378 13.7396C21.5438 13.7808 21.7573 13.76 21.9514 13.6797C22.1455 13.5995 22.3114 13.4635 22.4282 13.2889C22.5449 13.1143 22.6073 12.909 22.6073 12.699C22.6081 12.5593 22.5814 12.4209 22.5286 12.2916C22.4758 12.1624 22.3981 12.0448 22.2998 11.9456C22.2015 11.8464 22.0846 11.7676 21.9558 11.7137C21.827 11.6598 21.6888 11.6318 21.5492 11.6314V11.6377Z" fill="#D53D2C" />
      <path d="M9.64874 13.7728C10.2453 13.7728 10.7289 13.2892 10.7289 12.6927C10.7289 12.0961 10.2453 11.6125 9.64874 11.6125C9.0522 11.6125 8.5686 12.0961 8.5686 12.6927C8.5686 13.2892 9.0522 13.7728 9.64874 13.7728Z" fill="#7D3D42" />
      <path d="M9.6488 13.798C9.43157 13.7974 9.21939 13.7324 9.03907 13.6113C8.85875 13.4901 8.71838 13.3182 8.63568 13.1174C8.55298 12.9165 8.53166 12.6956 8.57442 12.4826C8.61718 12.2697 8.7221 12.0741 8.87593 11.9207C9.02976 11.7673 9.22559 11.663 9.43869 11.6208C9.6518 11.5787 9.87261 11.6006 10.0733 11.6839C10.2739 11.7672 10.4453 11.908 10.566 12.0887C10.6866 12.2694 10.751 12.4817 10.751 12.699C10.7501 12.9907 10.6337 13.2703 10.427 13.4763C10.2204 13.6823 9.94057 13.798 9.6488 13.798ZM9.6488 11.6377C9.4385 11.6371 9.23277 11.699 9.0577 11.8155C8.88263 11.932 8.74612 12.0979 8.66551 12.2921C8.58489 12.4864 8.56379 12.7002 8.6049 12.9064C8.646 13.1126 8.74745 13.302 8.89638 13.4505C9.0453 13.599 9.23498 13.6999 9.44134 13.7403C9.6477 13.7808 9.86143 13.7591 10.0554 13.6779C10.2494 13.5967 10.4149 13.4597 10.5309 13.2843C10.6469 13.1089 10.7081 12.903 10.7069 12.6927C10.7069 12.4118 10.5955 12.1423 10.3972 11.9434C10.1988 11.7444 9.92971 11.6323 9.6488 11.6314V11.6377Z" fill="#D53D2C" />
      <path d="M17.9907 14.2704C17.9435 14.2589 17.8937 14.2662 17.8519 14.291C17.8101 14.3157 17.7797 14.3558 17.7671 14.4027C17.6411 14.8845 16.983 14.9821 16.5578 14.8939C16.3497 14.8562 16.1602 14.7498 16.0198 14.5916C15.8793 14.4335 15.796 14.2328 15.7832 14.0216C15.7832 14.0216 15.7832 14.0027 15.7832 13.9933V13.9586L15.7643 13.9272L15.7454 13.902L15.7107 13.8768H15.6887H15.6478H15.6257H15.5879H15.5659H15.5249H15.5029L15.4683 13.902V13.924L15.4462 13.9586V13.9933C15.4462 13.9933 15.4462 14.009 15.4462 14.0216C15.4334 14.2328 15.3501 14.4335 15.2096 14.5916C15.0691 14.7498 14.8797 14.8562 14.6715 14.8939C14.2464 14.9821 13.5883 14.8939 13.4623 14.4027C13.4498 14.3555 13.419 14.3152 13.3768 14.2907C13.3346 14.2662 13.2843 14.2595 13.2371 14.272C13.1899 14.2845 13.1497 14.3153 13.1252 14.3575C13.1006 14.3997 13.0939 14.45 13.1064 14.4971C13.2639 15.0955 13.8748 15.2876 14.385 15.2876C14.5064 15.2873 14.6275 15.2768 14.7471 15.2561C14.9301 15.2179 15.1032 15.1422 15.2555 15.0338C15.4078 14.9254 15.536 14.7866 15.632 14.6263C15.7273 14.7872 15.8553 14.9265 16.0077 15.035C16.1601 15.1434 16.3336 15.2188 16.5169 15.2561C16.6354 15.2769 16.7555 15.2874 16.8759 15.2876C17.386 15.2876 17.997 15.0955 18.1544 14.4971C18.1604 14.4713 18.1607 14.4445 18.1555 14.4186C18.1502 14.3926 18.1395 14.3681 18.124 14.3466C18.1085 14.3251 18.0886 14.3072 18.0656 14.2941C18.0426 14.2809 18.017 14.2729 17.9907 14.2704Z" fill="#7D3D42" />
      <path d="M25.2083 13.4359C25.165 13.4359 25.1231 13.4208 25.0898 13.3932C25.0564 13.3657 25.0337 13.3273 25.0257 13.2848C25.0183 13.2364 25.0299 13.1871 25.0581 13.1472C25.0863 13.1073 25.1288 13.0798 25.1768 13.0706L26.4522 12.8533C26.476 12.8493 26.5004 12.85 26.5239 12.8554C26.5474 12.8608 26.5696 12.8709 26.5892 12.8849C26.6088 12.899 26.6255 12.9168 26.6382 12.9373C26.6509 12.9578 26.6594 12.9807 26.6632 13.0045C26.6677 13.0281 26.6674 13.0524 26.6624 13.0759C26.6574 13.0994 26.6476 13.1216 26.6338 13.1413C26.62 13.161 26.6024 13.1777 26.582 13.1904C26.5617 13.2032 26.5389 13.2117 26.5152 13.2155L25.2272 13.4454L25.2083 13.4359Z" fill="#7D3D42" />
      <path d="M26.4523 14.7742C26.4336 14.7772 26.4144 14.7772 26.3957 14.7742L25.1518 14.3649C25.1288 14.3574 25.1076 14.3455 25.0892 14.3299C25.0708 14.3142 25.0558 14.2951 25.0448 14.2736C25.0338 14.2521 25.0272 14.2287 25.0253 14.2046C25.0234 14.1805 25.0262 14.1564 25.0337 14.1334C25.0411 14.1104 25.053 14.0892 25.0687 14.0708C25.0843 14.0525 25.1035 14.0374 25.125 14.0264C25.1464 14.0155 25.1699 14.0088 25.1939 14.0069C25.218 14.005 25.2422 14.0079 25.2651 14.0153L26.5248 14.4152C26.5724 14.4248 26.6142 14.453 26.6411 14.4934C26.668 14.5339 26.6777 14.5833 26.6681 14.631C26.6584 14.6786 26.6303 14.7204 26.5899 14.7473C26.5494 14.7741 26.4999 14.7838 26.4523 14.7742Z" fill="#7D3D42" />
      <path d="M6.03685 13.4359H6.00221L4.72368 13.2029C4.67613 13.1944 4.63386 13.1675 4.60612 13.1279C4.57838 13.0884 4.56744 13.0395 4.57568 12.9919C4.58489 12.9439 4.61234 12.9013 4.65227 12.8731C4.6922 12.8449 4.7415 12.8333 4.78981 12.8407L6.07779 13.0706C6.12623 13.0748 6.17103 13.098 6.20233 13.1352C6.23363 13.1724 6.24887 13.2205 6.24469 13.269C6.24051 13.3174 6.21727 13.3622 6.18006 13.3935C6.14285 13.4248 6.09474 13.4401 6.0463 13.4359H6.03685Z" fill="#7D3D42" />
      <path d="M4.7897 14.7742C4.75124 14.7741 4.7138 14.7619 4.6827 14.7393C4.6516 14.7167 4.62843 14.6848 4.6165 14.6483C4.60456 14.6048 4.60884 14.5584 4.62853 14.5179C4.64823 14.4773 4.68201 14.4453 4.72356 14.4278L5.9832 14.0279C6.02913 14.013 6.07911 14.0168 6.12219 14.0387C6.16528 14.0605 6.19795 14.0985 6.21308 14.1444C6.2281 14.1908 6.22431 14.2412 6.20251 14.2848C6.18072 14.3284 6.14267 14.3616 6.09656 14.3774L4.83693 14.7774C4.82112 14.7784 4.80523 14.7773 4.7897 14.7742Z" fill="#7D3D42" />
      <path d="M22.7396 15.0545C23.3483 15.0545 23.8417 14.7922 23.8417 14.4688C23.8417 14.1453 23.3483 13.883 22.7396 13.883C22.1309 13.883 21.6374 14.1453 21.6374 14.4688C21.6374 14.7922 22.1309 15.0545 22.7396 15.0545Z" fill="#F397B7" />
      <path d="M8.51826 15.0545C9.12697 15.0545 9.62043 14.7922 9.62043 14.4688C9.62043 14.1453 9.12697 13.883 8.51826 13.883C7.90954 13.883 7.41608 14.1453 7.41608 14.4688C7.41608 14.7922 7.90954 15.0545 8.51826 15.0545Z" fill="#F397B7" />
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
