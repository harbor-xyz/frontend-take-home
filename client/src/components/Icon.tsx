import React, { FC, CSSProperties } from 'react';
import classnames from 'classnames';


import { ReactComponent as Add } from '../icons/Add.svg';
import { ReactComponent as Clock } from '../icons/Clock.svg';
import { ReactComponent as Killed } from '../icons/Killed.svg';
import { ReactComponent as Failed } from '../icons/Failed.svg';
import { ReactComponent as RunningTick } from '../icons/Running tick.svg';
import { ReactComponent as Pending } from '../icons/Standing up hour glass.svg';
import { ReactComponent as All } from '../icons/All status.svg';
import { ReactComponent as Dot } from '../icons/Dot.svg';
import { ReactComponent as Setting } from '../icons/Settings.svg';
import { ReactComponent as Star } from '../icons/Star in project.svg'
import { ReactComponent as Projects } from '../icons/Projects.svg';
import { ReactComponent as CommandSheet } from '../icons/Command sheet.svg'
import { ReactComponent as Docs } from '../icons/Docs.svg';
import { ReactComponent as Members } from '../icons/Members.svg';
import { ReactComponent as ProjectKey } from '../icons/ProjectKey.svg';
import { ReactComponent as UserKey } from '../icons/UserKey.svg';
import { ReactComponent as Testnets } from '../icons/Testnets.svg';
import { ReactComponent as ArrowLeft } from '../icons/Arrow left long.svg';
import { ReactComponent as ArrowDown } from '../icons/Arrow down short.svg';
import { ReactComponent as HarborLogo } from '../icons/Harbor logo.svg';
import { ReactComponent as UserCircle } from '../icons/User circle.svg';
import { ReactComponent as Copy } from '../icons/Copy to clipboard.svg';

import Alchemy from '../icons/Blockchains/Alchemy.png';
import Arbitrum from '../icons/Blockchains/Arbitrum.png';
import Ethereum from '../icons/Blockchains/Ethereum.png';
import Fantom from '../icons/Blockchains/Fantom.png';
import Optimism from '../icons/Blockchains/Optimism.png';
import Polygon from '../icons/Blockchains/Polygon.png';

interface BaseProps {
    alt?: string;
    width?: string;
    height?: string;
    color?: string;
    className?: string;
}

interface IconProps extends BaseProps {
    Src: React.FC<React.SVGProps<SVGSVGElement>>;
}

interface PngIconProps extends BaseProps {
    src: string;
}

const colorMap: Record<string, string> = {
    primary: "#0d6efd",
    secondary: "#6c757d",
    success: "#198754",
    info: "#0dcaf0",
    warning: "#ffc107",
    danger: "#dc3545",
    light: "#f8f9fa",
    dark: "#212529",
}

const Icon: FC<IconProps> = ({ Src, width, height, color, className }) => {
    return <Src fill={colorMap[color!]} width={width || '0.8em'} height={height || '0.8em'} className={className} />;
};

const PngIcon: FC<PngIconProps> = ({ src, alt, width, height, color, className }) => {
    const iconStyle: CSSProperties = {
        fill: color || 'currentColor',
        width: width || '0.8em',
        height: height || '0.8em',
    };
    return <img src={src} alt={alt || 'icon'} style={iconStyle} className={className} />;
};

export const AddIcon: React.FC<BaseProps> = (props) => <Icon Src={Add} {...props} />;
export const HarborLogoIcon: React.FC<BaseProps> = (props) => <Icon Src={HarborLogo} {...props} />;
export const ArrowLeftIcon: React.FC<BaseProps> = (props) => <Icon Src={ArrowLeft} {...props} />;
export const ArrowDownIcon: React.FC<BaseProps> = (props) => <Icon Src={ArrowDown} {...props} />;
export const ClockIcon: React.FC<BaseProps> = (props) => <Icon Src={Clock} {...props} />;
export const CommandSheetIcon: React.FC<BaseProps> = (props) => <Icon Src={CommandSheet} {...props} />;
export const CopyIcon: React.FC<BaseProps> = (props) => <Icon Src={Copy} {...props} />;
export const DocsIcon: React.FC<BaseProps> = (props) => <Icon Src={Docs} {...props} />;
export const DotIcon: React.FC<BaseProps> = (props) => <Icon Src={Dot} {...props} />;
export const KilledIcon: React.FC<BaseProps> = (props) => <Icon Src={Killed} {...props} />;
export const FailedIcon: React.FC<BaseProps> = (props) => <Icon Src={Failed} {...props} />;
export const RunningTickIcon: React.FC<BaseProps> = (props) => <Icon Src={RunningTick} {...props} />;
export const PendingIcon: React.FC<BaseProps> = (props) => <Icon Src={Pending} {...props} />;
export const AllIcon: React.FC<BaseProps> = (props) => <Icon Src={All} {...props} />;
export const SettingIcon: React.FC<BaseProps> = (props) => <Icon Src={Setting} {...props} />;
export const StarIcon: React.FC<BaseProps> = (props) => <Icon Src={Star} {...props} />;
export const ProjectsIcon: React.FC<BaseProps> = (props) => <Icon Src={Projects} {...props} />;
export const MembersIcon: React.FC<BaseProps> = (props) => <Icon Src={Members} {...props} />;
export const ProjectKeyIcon: React.FC<BaseProps> = (props) => <Icon Src={ProjectKey} {...props} />;
export const UserKeyIcon: React.FC<BaseProps> = (props) => <Icon Src={UserKey} {...props} />;
export const TestnetsIcon: React.FC<BaseProps> = (props) => <Icon Src={Testnets} {...props} />;
export const UserCircleIcon: React.FC<BaseProps> = (props) => <Icon Src={UserCircle} {...props} />;

export const AlchemyIcon: React.FC<BaseProps> = (props) => <PngIcon src={Alchemy} {...props} />;
export const ArbitrumIcon: React.FC<BaseProps> = (props) => <PngIcon src={Arbitrum} {...props} />;
export const EthereumIcon: React.FC<BaseProps> = (props) => <PngIcon src={Ethereum} {...props} />;
export const FantomIcon: React.FC<BaseProps> = (props) => <PngIcon src={Fantom} {...props} />;
export const OptimismIcon: React.FC<BaseProps> = (props) => <PngIcon src={Optimism} {...props} />;
export const PolygonIcon: React.FC<BaseProps> = (props) => <PngIcon src={Polygon} {...props} />;