import React from "react";
import './videoIframe.scss'

export default function VideoIframe() {
    return (
        <section className="videoIframe-section">
            <div className="container-lg">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/9Scs-J-MH0I?si=hefhoEUQVZFhfWwd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </section>
    )
}