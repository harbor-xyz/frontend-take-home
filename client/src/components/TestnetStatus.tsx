import React from 'react';
import classnames from 'classnames';
import { Option } from './Dropdown';
import { AllIcon, PendingIcon, RunningTickIcon, FailedIcon, KilledIcon } from './Icon';

export const statusOptions: Option[] = [
    { label: 'All', value: '', color: 'primary', OptionIcon: AllIcon },
    { label: 'Pending', value: 'PENDING', color: 'warning', OptionIcon: PendingIcon },
    { label: 'Running', value: 'RUNNING', color: 'success', OptionIcon: RunningTickIcon },
    { label: 'Failed', value: 'FAILED', color: 'danger', OptionIcon: FailedIcon },
    { label: 'Stopped', value: 'STOPPED', color: 'dark', OptionIcon: FailedIcon }
];

interface TestnetStatusProps {
    status: string
}

const TestnetStatus: React.FC<TestnetStatusProps> = ({ status }) => {
    const option = statusOptions.find(s => s.value === status);
    if (!option) return null;
    const { OptionIcon, label, color = 'dark' } = option;
    return <span className={classnames({ [`text-${color}`]: true })}>
        {OptionIcon && <OptionIcon color={color} />}
        <span className="ms-2">{label}</span></span>
}

export default TestnetStatus;
