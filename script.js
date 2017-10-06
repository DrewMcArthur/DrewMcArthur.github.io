import ProgressiveImage from "react-progressive-image-loading";

<ProgressiveImage
    preview="/assets/tiny-bg.png"
    src="/assets/bg.png"
    render={(src, style) => <body style={Object.assign(style, { backgroundImage: `url(${src})` })} />}
/>
