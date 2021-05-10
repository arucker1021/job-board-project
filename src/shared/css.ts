export const breakpoints = {
    small: 576,
    medium: 768,
    large: 992,
    xl: 1200    
}

export const bp = (breakpoint: string) => {
    if(breakpoint in breakpoints){
        return `@media(min-width: ${(breakpoints as any)[breakpoint]}px)`
    }
}
