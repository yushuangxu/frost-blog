import React from "react";
import type { HeaderProps } from '../types/components';
import Restraint from "./Restraint";
const Pagination: React.FC<HeaderProps> = () => {
    return <div>
        <Restraint>
            <div>
                <div>上一页</div>
                <div>1</div>
                <div>下一页</div>
            </div>
        </Restraint>
    </div>
}
export default Pagination;