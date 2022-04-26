import React from 'react'
import { CONTAINER_LOADING, IFRAME } from '../Style/Loading-styled'

export default function Loading() {

    return (
        <CONTAINER_LOADING>
            <svg className="position-absolute mx-auto" viewBox="-2 -2 64 64" width="60" height="60" ><path d="M30 0A30 30 0 0 1 60 30M30 60A30 30 0 0 1 0 30" fill="none" stroke="#6cf" ><animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.5s" keyTimes="0;1" values="0 30 30;180 30 30" keySplines="0.5 0 0.5 1" calcMode="spline" /></path></svg>
        </CONTAINER_LOADING>
    )
}