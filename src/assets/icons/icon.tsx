import React from 'react';
import Svg, {
  Circle,
  ClipPath,
  Defs,
  Ellipse,
  G,
  Image,
  Line,
  LinearGradient,
  Path,
  Pattern,
  Polygon,
  Rect,
  Stop,
  SvgProps,
  Use,
} from 'react-native-svg';
import {COLORS} from '../../constants/color';

export function GroupIcon(props: SvgProps) {
  return (
    <Svg
      width={22}
      height={17}
      viewBox="0 0 22 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M2 2h18M2 8.429h18M2 14.857h18"
        stroke="white"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
export function BackIcon(props: SvgProps) {
  return (
    <Svg
      width={22}
      height={20}
      viewBox="0 0 22 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M11 19l-9-9 9-9m11 9H2h20z"
        strokeWidth={2}
        stroke={COLORS.textColor1}
      />
    </Svg>
  );
}
export function StopIcon(props: SvgProps) {
  return (
    <Svg
      width={23}
      height={23}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx={11.5} cy={11.5} r={11.5} fill="#EE4927" />
      <Path
        d="M10.483 5.61h2.034l-.342 8.622h-1.368l-.324-8.622zm1.026 12.708c-.336 0-.618-.108-.846-.324a1.128 1.128 0 01-.342-.828c0-.324.114-.594.342-.81a1.15 1.15 0 01.846-.342c.336 0 .612.114.828.342.216.216.324.486.324.81 0 .324-.114.6-.342.828a1.099 1.099 0 01-.81.324z"
        fill="#fff"
      />
    </Svg>
  );
}
export function SearchIcon(props: SvgProps) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.523 7.69l3.138 3.14a.588.588 0 11-.832.83L7.69 8.524a4.667 4.667 0 11.832-.832zm-3.69.643a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
        fill="#999"
      />
    </Svg>
  );
}
export function ChevronDownIcon(props: SvgProps) {
  return (
    <Svg
      width={13}
      height={9}
      viewBox="0 0 13 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M12 1L6.5 7 1 1" stroke="#fff" strokeWidth={2} />
    </Svg>
  );
}
export function CrossIcon(props: SvgProps) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M.293.305a1 1 0 011.414 0L7 5.598 12.293.305a1 1 0 111.414 1.414L8.414 7.012l5.293 5.293a1 1 0 01-1.414 1.414L7 8.426 1.707 13.72a1 1 0 01-1.414-1.414l5.293-5.293L.293 1.72a1 1 0 010-1.414z"
        fill="#EE4927"
      />
    </Svg>
  );
}
export function BottomIcon(props: SvgProps) {
  return (
    <Svg
      width={11}
      height={6}
      viewBox="0 0 11 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M9.75 1L5.375 4.281 1 1"
        stroke="#999"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
export function MinIcon(props: SvgProps) {
  return (
    <Svg
      width={12}
      height={3}
      viewBox="0 0 12 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        transform="rotate(-90 .864 2.727)"
        fill="#fff"
        d="M0.863647 2.72705H2.909097V12.95435H0.863647z"
      />
    </Svg>
  );
}

export function Buttoncon(props: SvgProps) {
  return (
    <Svg
      width={16}
      height={21}
      viewBox="0 0 16 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M7.293 20.707a1 1 0 001.414 0l6.364-6.364a1 1 0 00-1.414-1.414L8 18.586l-5.657-5.657A1 1 0 00.93 14.343l6.364 6.364zM7 0v20h2V0H7z"
        fill="#AEAEAE"
      />
    </Svg>
  );
}
export function CherIcon(props: SvgProps) {
  return (
    <Svg
      width={10}
      height={10}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_1163_14142)">
        <Path
          d="M3.75.625L7.5 5 3.75 9.375"
          stroke="#999"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1163_14142">
          <Path fill="#fff" transform="rotate(-90 5 5)" d="M0 0H10V10H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export function ArrowDownIcon(props: SvgProps) {
  return (
    <Svg
      width={8}
      height={12}
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M6.625 7.94l-2.25 2.25V.41h-.75v9.78l-2.25-2.25-.53.53L4 11.625 7.155 8.47l-.53-.53z"
        fill="#313131"
      />
    </Svg>
  );
}
export function OrangeStarIcon(props: SvgProps) {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M5.536 0l1.47 3.806 3.795.34-2.885 2.692.874 4.016-3.254-2.142-3.254 2.142.874-4.016L.271 4.146l3.794-.34L5.535 0z"
        fill="#EE4927"
      />
    </Svg>
  );
}
export function GreyStarIcon(props: SvgProps) {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M5.585 0l1.47 3.806 3.795.34-2.885 2.692.874 4.016-3.254-2.142-3.254 2.142.874-4.016L.32 4.146l3.794-.34L5.584 0z"
        fill="#B4B4B4"
      />
    </Svg>
  );
}
export function SkripkaIcon(props: SvgProps) {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M12.22 1.456C10.382-.2 7.386-.2 5.548 1.456L.449 6.04a.15.15 0 000 .225l.721.649c.033.03.077.046.124.046a.186.186 0 00.124-.046l5.098-4.585c.633-.57 1.474-.882 2.369-.882.894 0 1.736.313 2.367.882.633.57.98 1.328.98 2.13 0 .806-.347 1.562-.98 2.131l-5.195 4.674-.842.758c-.787.708-2.067.708-2.854 0a1.715 1.715 0 01-.59-1.283c0-.485.21-.94.59-1.283l5.155-4.638a.73.73 0 01.486-.18h.002c.184 0 .354.064.482.18.131.118.202.273.202.438a.583.583 0 01-.202.434L4.273 9.478a.15.15 0 000 .225l.721.65c.033.029.078.045.124.045a.186.186 0 00.124-.046l4.211-3.79c.389-.35.602-.814.602-1.308 0-.494-.215-.96-.602-1.307-.803-.723-2.107-.721-2.91 0l-.5.451-4.652 4.186a3.029 3.029 0 00-.737.989c-.17.37-.257.767-.256 1.168 0 .813.354 1.578.993 2.153.662.594 1.529.891 2.396.891s1.735-.297 2.395-.891l6.039-5.432c.889-.801 1.38-1.868 1.38-3.002.003-1.136-.49-2.203-1.38-3.004z"
        fill="#999"
      />
    </Svg>
  );
}
export function TelegramIcon(props: SvgProps) {
  return (
    <Svg
      width={18}
      height={17}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M16.2.173L1.489 6.732c-1.005.466-.999 1.114-.185 1.402l3.778 1.363 8.74-6.375c.413-.29.79-.134.48.184l-7.08 7.388h-.002.001l-.26 4.502c.381 0 .55-.203.764-.441l1.835-2.063 3.816 3.259c.704.448 1.21.218 1.384-.753l2.506-13.65C17.52.36 16.872-.177 16.2.174z"
        fill="#898989"
        fillOpacity={0.5}
      />
    </Svg>
  );
}
export function XIcon(props: SvgProps) {
  return (
    <Svg
      width={15}
      height={14}
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M.293.305a1 1 0 011.414 0L7 5.598 12.293.305a1 1 0 111.414 1.414L8.414 7.012l5.293 5.293a1 1 0 01-1.414 1.414L7 8.426 1.707 13.72a1 1 0 01-1.414-1.414l5.293-5.293L.293 1.72a1 1 0 010-1.414z"
        fill="#D9D9D9"
      />
    </Svg>
  );
}
export function StarIcon(props: SvgProps) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M24.667 8.666H3.333V6h21.334v2.666zM22 .666H6v2.667h16V.667zM27.333 14v10.666a2.666 2.666 0 01-2.666 2.667H3.333a2.675 2.675 0 01-2.666-2.666V14a2.674 2.674 0 012.666-2.667h21.334A2.675 2.675 0 0127.333 14zM16.57 20.723l3.098-2.648-4.08-.342L14 14l-1.588 3.733-4.079.341 3.098 2.648-.934 3.944L14 22.57l3.503 2.096-.934-3.944z"
        fill="#fff"
      />
    </Svg>
  );
}
export function AnalyticsIcon(props: SvgProps) {
  return (
    <Svg
      width={33}
      height={33}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M28.05 13.2h1.65v18.15H3.3V13.2h1.65V9.9a8.253 8.253 0 018.25-8.25c1.171 0 2.293.247 3.3.693a8.15 8.15 0 013.3-.693 8.253 8.253 0 018.25 8.25v3.3zM8.25 9.9v3.3h3.3V9.9c0-1.865.643-3.564 1.683-4.95H13.2A4.965 4.965 0 008.25 9.9zm16.5 3.3V9.9a4.965 4.965 0 00-4.95-4.95h-.033A8.217 8.217 0 0121.45 9.9v3.3h3.3zM16.5 6.237A4.927 4.927 0 0014.85 9.9v3.3h3.3V9.9a4.927 4.927 0 00-1.65-3.663z"
        fill="#fff"
      />
    </Svg>
  );
}
export function ReviewsIcon(props: SvgProps) {
  return (
    <Svg
      width={29}
      height={29}
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M22 18H6L.667 23.333V2A1.333 1.333 0 012 .667h20A1.333 1.333 0 0123.333 2v14.666A1.333 1.333 0 0122 18zm6.667-8v18.666l-5.334-5.333H8.667A1.333 1.333 0 017.333 22v-1.334H26v-12h1.333A1.333 1.333 0 0128.667 10zM8.92 3.333c-1.16 0-2.093.267-2.813.787-.694.546-1.04 1.306-1.027 2.36l.013.04h2.574c.013-.4.133-.707.373-.92.247-.205.56-.314.88-.307.413 0 .76.133 1 .373.24.254.347.6.347 1 0 .427-.094.787-.307 1.094a2.424 2.424 0 01-.813.787C8.467 9 8 9.4 7.747 9.76c-.267.347-.414.906-.414 1.573H10c0-.413.053-.747.173-.986.12-.24.347-.48.68-.694.6-.32 1.094-.707 1.48-1.24.387-.533.587-1.08.587-1.747 0-1.013-.36-1.826-1.08-2.426-.707-.6-1.68-.907-2.92-.907zm-1.587 9.334v2.666H10v-2.667H7.333zm8 2.666H18v-2.667h-2.667v2.667zm0-12v8H18v-8h-2.667z"
        fill="#fff"
      />
    </Svg>
  );
}
export function RatingIcon(props: SvgProps) {
  return (
    <Svg
      width={30}
      height={24}
      viewBox="0 0 30 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M27.445.444H2.555A1.778 1.778 0 00.779 2.222v19.556a1.778 1.778 0 001.778 1.777h24.889a1.778 1.778 0 001.777-1.777V2.222A1.778 1.778 0 0027.445.444zm-8.392 18.614l-6.31-9.405-5.636 8.25-4-3.556 1.226-1.414 2.4 2.125 6.01-8.783 6.39 9.52 6.223-8.24 1.51 1.138-7.813 10.365z"
        fill="#fff"
      />
    </Svg>
  );
}
export function BrandsIcon(props: SvgProps) {
  return (
    <Svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M13 26c7.18 0 13-5.82 13-13S20.18 0 13 0 0 5.82 0 13s5.82 13 13 13z"
        fill="#fff"
      />
      <Path d="M5 13h8v8H5v-8zM13 5h8v8h-8V5z" fill="#313131" />
    </Svg>
  );
}
export function SupportIcon(props: SvgProps) {
  return (
    <Svg
      width={28}
      height={29}
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M26.42 4.842c-.01-.01-2.147 2.16-6.401 6.526L17.034 8.3l6.36-6.537C20.047-.307 15.747.224 12.96 3.09a8.893 8.893 0 00-2.224 3.954 9.07 9.07 0 00-.005 4.567l.063.242-9.967 10.24a.592.592 0 000 .816l4.971 5.11a.554.554 0 00.795 0l9.96-10.237.235.065c2.943.806 6.103-.032 8.297-2.287 2.791-2.865 3.308-7.284 1.336-10.717z"
        fill="#fff"
      />
    </Svg>
  );
}
export function InstructionsIcon(props: SvgProps) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M15 30c-2.031 0-3.975-.395-5.83-1.186-1.856-.791-3.452-1.856-4.79-3.194-1.338-1.338-2.402-2.934-3.193-4.79A14.716 14.716 0 010 15c0-2.031.396-3.975 1.187-5.83.79-1.856 1.855-3.452 3.193-4.79s2.934-2.402 4.79-3.193A14.716 14.716 0 0115 0c2.031 0 3.975.396 5.83 1.187 1.856.79 3.452 1.855 4.79 3.193s2.402 2.934 3.194 4.79A14.716 14.716 0 0130 15c0 2.031-.395 3.975-1.186 5.83-.791 1.856-1.856 3.452-3.194 4.79-1.338 1.338-2.934 2.402-4.79 3.194A14.716 14.716 0 0115 30zm.015-3.75c.517 0 .957-.18 1.318-.542.361-.361.542-.8.542-1.318s-.18-.962-.542-1.333a1.77 1.77 0 00-1.318-.557c-.518 0-.962.186-1.333.557a1.819 1.819 0 00-.557 1.333c0 .517.185.957.557 1.318.37.361.815.542 1.333.542zM15 3.75c-2.07 0-3.838.732-5.303 2.197C8.232 7.412 7.5 9.18 7.5 11.25c0 .527.18.972.542 1.333.361.361.8.542 1.318.542s.962-.18 1.333-.542c.372-.361.557-.806.557-1.333 0-1.035.366-1.919 1.099-2.651A3.613 3.613 0 0115 7.5c1.035 0 1.919.366 2.651 1.099a3.613 3.613 0 011.099 2.651 3.613 3.613 0 01-1.099 2.651A3.613 3.613 0 0115 15c-.508 0-.947.386-1.318 1.157-.372.772-.557 1.636-.557 2.593 0 .527.18.972.542 1.333.361.361.806.542 1.333.542.527 0 .972-.18 1.333-.542.361-.361.542-.806.542-1.333v-.234c1.64-.43 2.988-1.319 4.043-2.666 1.055-1.348 1.582-2.881 1.582-4.6 0-2.07-.732-3.838-2.197-5.303C18.838 4.482 17.07 3.75 15 3.75z"
        fill="#fff"
      />
    </Svg>
  );
}
export function ExitIcon(props: SvgProps) {
  return (
    <Svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M22.75 26H11.375a3.133 3.133 0 01-2.298-.951 3.127 3.127 0 01-.952-2.296V21.13c0-.457.157-.841.47-1.154.313-.313.694-.47 1.142-.47.449 0 .834.157 1.156.47.321.313.482.693.482 1.141 0 .448.157.833.47 1.154a1.55 1.55 0 001.155.482h6.5c.44 0 .821-.16 1.143-.482a1.56 1.56 0 00.482-1.141V4.87c0-.44-.16-.82-.482-1.141a1.562 1.562 0 00-1.143-.482H13c-.457 0-.842.16-1.155.482-.313.321-.47.706-.47 1.154 0 .448-.16.833-.482 1.154a1.577 1.577 0 01-1.156.482c-.448 0-.83-.16-1.142-.482a1.61 1.61 0 01-.47-1.167V3.247c0-.896.317-1.662.952-2.296A3.133 3.133 0 0111.375 0H22.75c.897 0 1.663.317 2.298.951.635.634.952 1.4.952 2.296v19.506c0 .896-.317 1.662-.952 2.296-.635.634-1.4.951-2.298.951zM17.875 9.74c.44 0 .821.161 1.143.482.321.322.482.702.482 1.142v3.272c0 .44-.16.82-.482 1.142a1.562 1.562 0 01-1.143.481H6.5v2.563c0 .186-.114.346-.343.481-.228.136-.5.195-.812.178-.313-.017-.563-.118-.75-.304L.458 14.103A1.503 1.503 0 010 13c0-.431.152-.799.457-1.103l4.139-5.074c.186-.186.436-.283.749-.291.313-.009.584.055.812.19.229.135.343.304.343.507V9.74h11.375z"
        fill="#fff"
      />
    </Svg>
  );
}
export function HomeIcon(props: SvgProps) {
  return (
    <Svg
      width={21}
      height={20}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M8.25 18.375V12.75h4.5v5.625c0 .619.506 1.125 1.125 1.125h3.375c.619 0 1.125-.506 1.125-1.125V10.5h1.912c.518 0 .765-.641.372-.979l-9.405-8.47a1.134 1.134 0 00-1.508 0L.341 9.52a.56.56 0 00.371.98h1.913v7.874c0 .619.506 1.125 1.125 1.125h3.375c.619 0 1.125-.506 1.125-1.125z"
        fill={props.color}
      />
    </Svg>
  );
}
export function SearchhIcon(props: SvgProps) {
  return (
    <Svg
      width={24}
      height={16}
      viewBox="0 0 24 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M6.375 4.125H.75v-2.25h5.625v2.25zm0 3.375H.75v2.25h5.625V7.5zm15.289 7.875l-4.309-4.309c-.9.585-1.957.934-3.105.934a5.627 5.627 0 01-5.625-5.625A5.627 5.627 0 0114.25.75a5.627 5.627 0 015.625 5.625 5.6 5.6 0 01-.934 3.094l4.309 4.32-1.586 1.586zm-4.039-9A3.385 3.385 0 0014.25 3a3.385 3.385 0 00-3.375 3.375A3.385 3.385 0 0014.25 9.75a3.385 3.385 0 003.375-3.375zm-16.875 9H12v-2.25H.75v2.25z"
        fill={props.color}
        {...props}
      />
    </Svg>
  );
}
export function PulseIcon(props: SvgProps) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 0C4.925 0 0 4.925 0 11s4.925 11 11 11 11-4.925 11-11S17.075 0 11 0zm1 15a1 1 0 01-2 0v-3H7a1 1 0 010-2h3V7a1 1 0 012 0v3h3a1 1 0 010 2h-3v3z"
        fill={props.color}
        {...props}
      />
    </Svg>
  );
}
export function BasketIcon(props: SvgProps) {
  return (
    <Svg width={23} height={21} viewBox="0 0 23 21" fill="none" {...props}>
      <Path
        d="M21.965 4.5a2.25 2.25 0 00-1.913-1.124h-14.4L5 .833A1.125 1.125 0 003.875.001h-2.25a1.125 1.125 0 100 2.25H3.02l3.105 11.542a1.125 1.125 0 001.125.833h10.125a1.126 1.126 0 001.001-.62l3.69-7.38a2.251 2.251 0 00-.101-2.125zM6.688 20.25a1.687 1.687 0 100-3.374 1.687 1.687 0 000 3.374zM17.938 20.25a1.687 1.687 0 100-3.374 1.687 1.687 0 000 3.374z"
        fill={props.color}
        {...props}
      />
    </Svg>
  );
}
export function UserIcon(props: SvgProps) {
  return (
    <Svg width={21} height={22} viewBox="0 0 22 22" fill="none" {...props}>
      <Path
        d="M5.563 5.063a5.069 5.069 0 005.062 5.062 5.069 5.069 0 005.063-5.063A5.069 5.069 0 0010.625 0a5.069 5.069 0 00-5.063 5.063zm14.062 16.312h1.125V20.25c0-4.341-3.534-7.875-7.875-7.875h-4.5C4.032 12.375.5 15.909.5 20.25v1.125h19.125z"
        fill={props.color}
        {...props}
      />
    </Svg>
  );
}
export function RightyIcon(props: SvgProps) {
  return (
    <Svg
      width={13}
      height={13}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_1163_15713)">
        <Path
          d="M12.188 4.875L6.5 9.75.812 4.875"
          stroke="#999"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1163_15713">
          <Path fill="#fff" d="M0 0H13V13H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export function RightytIcon(props: SvgProps) {
  return (
    <Svg
      width={13}
      height={13}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_1163_15713)">
        <Path
          d="M12.188 4.875L6.5 9.75.812 4.875"
          stroke="#999"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1163_15713">
          <Path fill="#fff" d="M0 0H13V13H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export function MessagesIcon(props: SvgProps) {
  return (
    <Svg
      id="Layer_1"
      width={35}
      height={35}
      viewBox="0 0 50 50"
      {...props}
      fill="black">
      <G>
        <G>
          <Path
            fill={COLORS.lightGray1}
            // stroke="#1D2656"
            // stroke-linecap="round"
            // stroke-linejoin="round"
            // stroke-miterlimit="10"
            d="M44.102,18.267
       v4.567c0,2.161-1.751,3.911-3.916,3.911l0.306,4.282l-5.882-4.282h-4.614v-2.812c0-1.397-0.621-2.652-1.604-3.497
       c-0.811-0.703-1.863-1.126-3.014-1.126H23.13v-1.044c0-2.161,1.751-3.911,3.911-3.911h13.145
       C42.351,14.355,44.102,16.106,44.102,18.267z"
          />

          <Line
            // stroke="#1D2656"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            x1="37.855"
            y1="17.733"
            x2="27.352"
            y2="17.733"
          />

          <Line
            fill="white"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            x1="40.492"
            y1="23.142"
            x2="32.997"
            y2="23.142"
          />

          <Line
            fill="white"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            x1="40.492"
            y1="20.437"
            x2="35.218"
            y2="20.437"
          />

          <Line
            fill="white"
            stroke="#1D2656"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            x1="31.032"
            y1="20.437"
            x2="28.392"
            y2="20.437"
          />
        </G>
        <G>
          <Path
            fill="white"
            stroke="#1D2656"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            d="M29.996,23.933
       v5.395c0,2.553-2.07,4.619-4.619,4.619h-8.944L9.49,39.006l0.362-5.059c-2.557,0-4.623-2.066-4.623-4.619v-5.395
       c0-2.553,2.066-4.623,4.623-4.623h15.525c1.151,0,2.204,0.423,3.014,1.126C29.375,21.281,29.996,22.536,29.996,23.933z"
          />

          <Line
            fill="none"
            stroke="#1D2656"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            x1="12.604"
            y1="23.303"
            x2="25.009"
            y2="23.303"
          />

          <Line
            fill="none"
            stroke="#1D2656"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            x1="9.489"
            y1="29.691"
            x2="18.341"
            y2="29.691"
          />

          <Line
            fill="none"
            stroke="#1D2656"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            x1="9.489"
            y1="26.497"
            x2="15.718"
            y2="26.497"
          />

          <Line
            fill="none"
            stroke="#1D2656"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            x1="20.663"
            y1="26.497"
            x2="24.614"
            y2="26.497"
          />
        </G>
      </G>
    </Svg>
  );
}
export function NotificationIcon(props: SvgProps) {
  return (
    <Svg
      id="Layer_1"
      viewBox="0 0 50 50"
      width={25}
      height={25}
      {...props}
      fill="white"
      stroke={COLORS.white}>
      <G id="Layer_1_1_">
        <Path
          d="M24,49h2c2.414,0,4.434-1.721,4.899-4H49v-6.618l-6-3V23c0-8.2-5.517-15.122-13.029-17.286C29.819,3.092,27.659,1,25,1
		s-4.819,2.092-4.971,4.714C12.517,7.878,7,14.8,7,23v12.382l-6,3V45h18.101C19.566,47.279,21.586,49,24,49z M26,47h-2
		c-1.304,0-2.416-0.836-2.829-2h7.657C28.416,46.164,27.304,47,26,47z M25,3c1.396,0,2.561,0.962,2.895,2.255
		C26.95,5.101,25.988,5,25,5s-1.95,0.101-2.895,0.255C22.439,3.962,23.604,3,25,3z M3,39.618l6-3V23c0-8.822,7.178-16,16-16
		s16,7.178,16,16v13.618l6,3V43H31H19H3V39.618z"
        />
      </G>
    </Svg>
  );
}
export function LeftArrowIcon(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 407.436 407.436"
      {...props}
      width={15}
      height={15}
      fill="gray">
      <Polygon points="112.814,0 91.566,21.178 273.512,203.718 91.566,386.258 112.814,407.436 315.869,203.718 " />
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
    </Svg>
  );
}

export function PaymentexpectedIcon(props: SvgProps) {
  return (
    <Svg
      width={21}
      height={16}
      viewBox="0 0 21 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M18.362 16H2.638c-1.086 0-1.966-.895-1.966-2V2c0-1.105.88-2 1.966-2h15.724c1.086 0 1.966.895 1.966 2v12c0 1.105-.88 2-1.966 2zM2.638 7v7h15.724V7H2.638zm0-5v2.5h15.724V2H2.638zm8.845 10h-6.88v-2h6.88v2z"
        fill="#898989"
      />
    </Svg>
  );
}

export function SendingIcon(props: SvgProps) {
  return (
    <Svg
      width={17}
      height={18}
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.017 2.678A2.3 2.3 0 013.291.667h10.418a2.3 2.3 0 012.273 2.01c.212 1.584.53 4.162.635 6.08.104 1.886.075 4.438.041 6.028-.025 1.191-.93 2.163-2.097 2.253-1.588.123-4.157.295-6.061.295s-4.473-.172-6.06-.295c-1.168-.09-2.073-1.062-2.098-2.253-.034-1.59-.063-4.142.04-6.029.107-1.917.424-4.495.635-6.078zm2.274-.73c-.522 0-.956.387-1.025.902-.211 1.583-.522 4.117-.625 5.978-.101 1.833-.074 4.34-.04 5.93.012.53.413.961.934 1.002 1.586.122 4.113.291 5.965.291 1.852 0 4.379-.169 5.965-.291.521-.04.922-.471.934-1.003.034-1.59.061-4.096-.04-5.929-.103-1.861-.414-4.395-.625-5.978a1.033 1.033 0 00-1.025-.901H3.291z"
        fill="#898989"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.14 4.086c.348 0 .63.287.63.64 0 1.535 1.222 2.778 2.73 2.778s2.73-1.243 2.73-2.777c0-.354.282-.641.63-.641.348 0 .63.287.63.64 0 2.243-1.787 4.06-3.99 4.06-2.204 0-3.99-1.817-3.99-4.06 0-.353.282-.64.63-.64z"
        fill="#898989"
      />
    </Svg>
  );
}

export function OrderIcon(props: SvgProps) {
  return (
    <Svg
      width={22}
      height={16}
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.696 7.864l-2.303-5a.77.77 0 00-.707-.435h-2.303V1c0-.394-.344-.714-.768-.714H1.027C.603.286.26.606.26 1v12.143c0 .394.343.714.767.714H2.67c.364 1.245 1.578 2.108 2.964 2.108s2.6-.864 2.964-2.108h4.821c.364 1.245 1.578 2.108 2.964 2.108s2.6-.864 2.964-2.108h1.643c.424 0 .768-.32.768-.714v-5a.672.672 0 00-.062-.279zm-5.313-4.007h1.797l1.643 3.572h-3.44V3.857zM5.634 14.572c-.848 0-1.535-.64-1.535-1.43 0-.788.687-1.428 1.535-1.428.848 0 1.536.64 1.536 1.429s-.688 1.428-1.536 1.428zm7.785-2.143H8.598c-.364-1.245-1.578-2.108-2.964-2.108s-2.6.863-2.964 2.108h-.875V1.714h13.053v8.972a2.892 2.892 0 00-1.429 1.743zm2.964 2.143c-.848 0-1.535-.64-1.535-1.43 0-.788.687-1.428 1.535-1.428.848 0 1.536.64 1.536 1.429s-.688 1.428-1.536 1.428zm3.839-2.143h-.875c-.35-1.258-1.567-2.139-2.964-2.143V8.857h3.839v3.572z"
        fill="#898989"
      />
    </Svg>
  );
}

export function SmsIcon(props: SvgProps) {
  return (
    <Svg
      width={18}
      height={16}
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.207 11.619l-.707-.42 1.625-2.945h2.438c.448 0 .812-.377.812-.841V2.365c0-.465-.364-.841-.813-.841H2.438c-.45 0-.813.376-.813.841v5.048c0 .464.364.84.813.84h3.656v.842H2.437c-.897 0-1.624-.753-1.624-1.682V2.365c0-.93.727-1.683 1.625-1.683h8.124c.898 0 1.626.754 1.626 1.683v5.048c0 .929-.728 1.682-1.626 1.682H8.597l-1.39 2.524zM9.75 3.206h-6.5v.842h6.5v-.842zM7.312 5.73H3.25v.841h4.063V5.73z"
        fill="#898989"
      />
    </Svg>
  );
}

export function PenIcon(props: SvgProps) {
  return (
    <Svg
      width={12}
      height={13}
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.144 2.29L9.3.278a.842.842 0 00-1.252 0L.224 8.809v3.375h3.09l7.824-8.53c.341-.379.341-.986 0-1.365h.006zm-8.293 8.675H1.342V9.32l5.276-5.758 1.514 1.652-5.281 5.751zm4.554-8.262L8.92 4.354l1.268-1.383-1.514-1.65-1.269 1.382z"
        fill={props.fill}
      />
    </Svg>
  );
}

export function UserInterfaceIcon(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 64 64"
      {...props}
      width={25}
      height={25}
      fill={COLORS.white}>
      {/* <title /> */}
      <G id="User" fill={COLORS.white}>
        <Path
          d="M41.2452,33.0349a16,16,0,1,0-18.49,0A26.0412,26.0412,0,0,0,4,58a2,2,0,0,0,2,2H58a2,2,0,0,0,2-2A26.0412,26.0412,0,0,0,41.2452,33.0349ZM20,20A12,12,0,1,1,32,32,12.0137,12.0137,0,0,1,20,20ZM8.09,56A22.0293,22.0293,0,0,1,30,36h4A22.0293,22.0293,0,0,1,55.91,56Z"
          fill={COLORS.white}
        />
      </G>
    </Svg>
  );
}

export function ExclamationIcon(props: SvgProps) {
  return (
    <Svg width={25} height={25} viewBox="0 0 45.311 45.311" {...props}>
      <G>
        <Path
          d="M22.675,0.02c-0.006,0-0.014,0.001-0.02,0.001c-0.007,0-0.013-0.001-0.02-0.001C10.135,0.02,0,10.154,0,22.656
		c0,12.5,10.135,22.635,22.635,22.635c0.007,0,0.013,0,0.02,0c0.006,0,0.014,0,0.02,0c12.5,0,22.635-10.135,22.635-22.635
		C45.311,10.154,35.176,0.02,22.675,0.02z M22.675,38.811c-0.006,0-0.014-0.001-0.02-0.001c-0.007,0-0.013,0.001-0.02,0.001
		c-2.046,0-3.705-1.658-3.705-3.705c0-2.045,1.659-3.703,3.705-3.703c0.007,0,0.013,0,0.02,0c0.006,0,0.014,0,0.02,0
		c2.045,0,3.706,1.658,3.706,3.703C26.381,37.152,24.723,38.811,22.675,38.811z M27.988,10.578
		c-0.242,3.697-1.932,14.692-1.932,14.692c0,1.854-1.519,3.356-3.373,3.356c-0.01,0-0.02,0-0.029,0c-0.009,0-0.02,0-0.029,0
		c-1.853,0-3.372-1.504-3.372-3.356c0,0-1.689-10.995-1.931-14.692C17.202,8.727,18.62,5.29,22.626,5.29
		c0.01,0,0.02,0.001,0.029,0.001c0.009,0,0.019-0.001,0.029-0.001C26.689,5.29,28.109,8.727,27.988,10.578z"
        />
      </G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
    </Svg>
  );
}

export function DownIcon(props: SvgProps) {
  return (
    <Svg viewBox="0 0 48 48" {...props} width={25} height={25}>
      <Path d="M14 20l10 10 10-10z" />
      <Path d="M0 0h48v48h-48z" fill="none" />
    </Svg>
  );
}

export function PlusIcon(props: SvgProps) {
  return (
    <Svg width={15} height={15} viewBox="0 0 19 19" fill="none" {...props}>
      <Path
        d="M18.462 11.054h-7.07V18.3h-3.71v-7.245H.612v-3.36h7.07V.45h3.71v7.245h7.07v3.36z"
        fill={props?.fill}
      />
    </Svg>
  );
}

export function MessageIcon(props: SvgProps) {
  return (
    <Svg viewBox="0 0 43.59 40.14" {...props} width={25} height={25}>
      <Defs></Defs>
      <G id="Layer_2" data-name="Layer 2">
        <G id="Layer_2-2" data-name="Layer 2">
          <Path
            class="cls-1"
            d="M21.46,1C9.83,1,1,8.74,1,18.28a12.83,12.83,0,0,0,5.41,11h0A15.59,15.59,0,0,1,6,37.4a1.35,1.35,0,0,0,1.74,1.66l10.59-3.75a23.26,23.26,0,0,0,3.26.25c11.63,0,21-7.74,21-17.28S33.09,1,21.46,1Z"
          />
          <Path class="cls-1" d="M18.15,35.31a23.69,23.69,0,0,1-6.8-2.44" />
          <Circle cx="12.84" cy="18.87" r="2.37" />
          <Circle cx="22.12" cy="18.87" r="2.37" />
          <Circle cx="31.4" cy="18.87" r="2.37" />
        </G>
      </G>
    </Svg>
  );
}

export function RightIcon(props: SvgProps) {
  return (
    <Svg
      width={10}
      height={20}
      viewBox="0 0 5 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M4.4 3.793L.98.586a.285.285 0 00-.396.008.27.27 0 00.009.388L3.809 4 .729 7.13a.27.27 0 00.008.388.284.284 0 00.397-.007l3.274-3.33a.27.27 0 00-.008-.389z"
        fill={props.fill}
      />
    </Svg>
  );
}

export function PaymentExpectedIcon(props: SvgProps) {
  return (
    <Svg
      width={21}
      height={16}
      viewBox="0 0 21 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M18.362 16H2.638c-1.086 0-1.966-.895-1.966-2V2c0-1.105.88-2 1.966-2h15.724c1.086 0 1.966.895 1.966 2v12c0 1.105-.88 2-1.966 2zM2.638 7v7h15.724V7H2.638zm0-5v2.5h15.724V2H2.638zm8.845 10h-6.88v-2h6.88v2z"
        fill="#898989"
      />
    </Svg>
  );
}

export function RightgreyIcon(props: SvgProps) {
  return (
    <Svg
      width={10}
      height={20}
      viewBox="0 0 5 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M4.4 3.793L.98.586a.285.285 0 00-.396.008.27.27 0 00.009.388L3.809 4 .729 7.13a.27.27 0 00.008.388.284.284 0 00.397-.007l3.274-3.33a.27.27 0 00-.008-.389z"
        fill="#898989"
      />
    </Svg>
  );
}
