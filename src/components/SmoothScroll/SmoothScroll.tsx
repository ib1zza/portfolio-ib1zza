import {ReactLenis, useLenis} from '@studio-freight/react-lenis'

export default function SmoothScroll({
                          children
                      }: {
                          children: React.ReactNode
                      }
) {
    const lenis = useLenis(({scroll}) => {
        // called every scroll
    })

    return (
        <ReactLenis root options={{
            lerp: 0.05,
        }}>
            {children}
        </ReactLenis>
    )
}
