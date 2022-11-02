/*
 * @Author: foxfly
 * @Contact: 617903352@qq.com
 * @Date: 2022-09-18 16:51:46
 * @Description: store utils文件
 */

/** 跟踪loading状态方法 */
export const trackLoadingState = (
    builder: any,
    asyncThunk: any,
    key: string,
) => {
    builder.addCase(asyncThunk.pending, (state: { isLoading: boolean }) => {

        state.isLoading = true;
    });
    builder.addCase(asyncThunk.fulfilled, (state: any, action: any) => {
        state.isLoading = false;

        if (key) state[key] = action.payload;
    });
    builder.addCase(
        asyncThunk.rejected,
        (state: { isLoading: boolean }) => (state.isLoading = false),
    );
};
