import React from 'react';
import type { ContainerProps } from '@/types/components';

const Container: React.FC<ContainerProps> = ({
    children, className = '',


}) => {
    return <div className={className} >


        {children}
    </div>
}

export default Container