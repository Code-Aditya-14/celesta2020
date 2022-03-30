import React from "react";

function offlineIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 512 512"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <g fill="#658401" fillOpacity="1">
        <g fill="#658401" fillOpacity="1">
          <path
            fill="#658401"
            fillOpacity="1"
            d="M437.019 74.981C388.668 26.629 324.38 0 256 0 187.619 0 123.332 26.629 74.98 74.981 26.629 123.332 0 187.62 0 256s26.629 132.668 74.981 181.02C123.332 485.371 187.619 512 256 512c68.38 0 132.668-26.629 181.019-74.98C485.37 388.668 512 324.38 512 256s-26.63-132.668-74.981-181.019zM182.06 35.044c-10.76 11.17-20.727 24.896-29.67 41.004-6.283-5.617-12.448-11.75-18.472-18.408a232.011 232.011 0 0148.142-22.596zm-67.239 35.745c8.71 9.833 17.715 18.705 26.979 26.573-11.776 26.527-20.372 56.726-25.438 89.028-27.946-9.887-50.19-23.266-65.638-39.851-.074-.079-.154-.146-.229-.222 15.836-29.55 37.859-55.303 64.326-75.528zM23.011 256c0-30.947 6.08-60.495 17.084-87.537 19.925 18.859 45.443 32.164 73.248 41.426a459.096 459.096 0 00-2.31 46.107c0 15.629.788 31.046 2.31 46.112-27.807 9.261-53.325 22.565-73.252 41.421-11.001-27.038-17.08-56.585-17.08-87.529zm91.799 185.201c-26.465-20.225-48.485-45.978-64.319-75.526.076-.077.158-.145.232-.226 15.45-16.582 37.695-29.958 65.641-39.844 5.066 32.297 13.662 62.494 25.434 89.019-9.267 7.87-18.276 16.743-26.988 26.577zm19.095 13.152c6.031-6.664 12.201-12.8 18.49-18.42 8.943 16.109 18.905 29.851 29.665 41.024a232.02 232.02 0 01-48.155-22.604zm110.587 33.57c-27.028-4.988-52.52-27.467-72.765-64.557-.366-.67-.72-1.354-1.082-2.031 23.512-16.669 48.395-26.35 73.846-28.595v95.183zm0-118.264c-29.091 2.162-57.339 12.518-83.847 30.583-10.239-24.368-17.696-51.958-22.063-81.446 30.339-7.986 65.982-12.484 105.91-13.206v64.069zm0-87.095c-34.062.589-72.477 3.926-108.671 13.015a439.427 439.427 0 01-1.778-39.583c0-13.405.605-26.63 1.778-39.577 36.192 9.092 74.607 12.428 108.671 13.017v53.128zm0-76.154c-39.929-.723-75.572-5.221-105.911-13.208 4.368-29.491 11.824-57.085 22.064-81.454 26.507 18.066 54.754 28.421 83.847 30.583v64.079zm0-87.162c-25.452-2.245-50.336-11.927-73.844-28.596.36-.675.714-1.358 1.079-2.026 20.245-37.088 45.737-59.569 72.765-64.557v95.179zm152.685-48.46c26.469 20.225 48.492 45.979 64.327 75.529-.075.077-.156.144-.23.223-15.45 16.585-37.696 29.965-65.643 39.852-5.066-32.301-13.662-62.5-25.437-89.027 9.267-7.87 18.272-16.743 26.983-26.577zm-19.095-13.149c-6.026 6.661-12.191 12.794-18.476 18.412-8.943-16.111-18.913-29.839-29.674-41.011a232.061 232.061 0 0148.15 22.599zm-110.579-33.57c27.027 4.988 52.52 27.469 72.764 64.557.366.67.72 1.353 1.082 2.03-23.508 16.669-48.391 26.35-73.845 28.593v-95.18zm83.846 87.68c10.24 24.369 17.697 51.963 22.064 81.453-30.339 7.986-65.981 12.485-105.91 13.207V142.33c29.093-2.161 57.341-12.516 83.846-30.581zm-83.846 117.688c34.062-.588 72.477-3.926 108.669-13.016a439.287 439.287 0 011.778 39.576c0 13.408-.605 26.633-1.778 39.582-36.193-9.089-74.607-12.426-108.669-13.014v-53.128zm0 76.152c39.928.723 75.57 5.22 105.909 13.205-4.367 29.488-11.823 57.078-22.062 81.445-26.509-18.064-54.756-28.419-83.847-30.581v-64.069zm0 182.335v-95.183c25.452 2.244 50.336 11.923 73.847 28.593-.361.678-.717 1.362-1.083 2.033-20.244 37.089-45.737 59.57-72.764 64.557zm62.429-10.964c10.762-11.174 20.726-24.919 29.67-41.03 6.29 5.622 12.462 11.759 18.492 18.424a232.157 232.157 0 01-48.162 22.606zm67.257-35.757c-8.714-9.835-17.723-18.709-26.992-26.58 11.774-26.525 20.368-56.72 25.433-89.018 27.947 9.884 50.194 23.262 65.645 39.845.075.081.156.147.234.226-15.834 29.549-37.855 55.302-64.32 75.527zm1.463-139.097a459.156 459.156 0 002.31-46.11c0-15.627-.788-31.041-2.31-46.105 27.808-9.262 53.326-22.568 73.253-41.428 11.004 27.041 17.084 56.59 17.084 87.537 0 30.944-6.078 60.491-17.08 87.53-19.928-18.858-45.448-32.163-73.257-41.424z"
          ></path>
        </g>
      </g>
      <g
        fill="#658401"
        fillOpacity="1"
        transform="matrix(3.0274 0 0 2.91337 3.918 13.768)"
      >
        <path
          fill="#658401"
          fillOpacity="1"
          d="M171.213 21.213l-150 150L0 150 150 0z"
        ></path>
      </g>
    </svg>
  );
}

export default offlineIcon;
