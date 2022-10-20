import React from 'react';
import type { ContainerProps } from '@/types/components';

const Container: React.FC<ContainerProps> = ({
    children, className = '',
    steep = false

}) => {
    return <div className={className} >
        {!steep && <div style={{ height: 50 }} />}

        {children}
    </div>
}

export default Container