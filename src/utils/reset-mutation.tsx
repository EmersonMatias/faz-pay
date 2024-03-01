export function resetMutation(isSuccess: boolean, reset: () => void){
    if (isSuccess) {
        setTimeout(() => {

            reset()
        }, 4000)
    }

}