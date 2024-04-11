import React from "react";
import type { SVGProps } from "react";

export function NixLambda(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="m6 20l4.16-12.09L9.34 6H8V4h2c.42 0 .78.26.93.63L16.66 18H18v2h-2c-.43 0-.79-.27-.93-.64l-3.74-8.71L8.12 20z"
      ></path>
    </svg>
  );
}

export function NixBuiltin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="svg-icon"
      style={{
        width: "75%",
        height: "75%",
        verticalAlign: "middle",
        fill: "currentColor",
        overflow: "hidden",
      }}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M273.094656 924.669952c0-0.60416-5.636096-10.819584-12.525568-22.700032-6.889472-11.880448-12.525568-22.069248-12.525568-22.64064s19.484672-34.588672 43.300864-75.595776c23.816192-41.005056 43.669504-75.362304 44.118016-76.347392 0.708608-1.55648-3.293184-8.935424-30.507008-56.250368-17.227776-29.952-31.322112-54.85568-31.322112-55.343104 0-1.024 50.09408-89.090048 51.621888-90.74688 0.847872-0.9216 1.212416-0.786432 2.207744 0.80896 0.65536 1.050624 34.562048 59.916288 75.347968 130.80576 128.24576 222.9248 153.296896 266.26048 154.43968 267.18208 0.6144 0.495616 1.114112 1.134592 1.114112 1.421312 0 0.28672-24.240128 0.43008-53.866496 0.315392-47.151104-0.18432-53.889024-0.3584-54.052864-1.421312-0.22528-1.462272-56.651776-99.9936-59.10528-103.202816-1.527808-2.002944-1.855488-2.11968-2.920448-1.04448-1.409024 1.425408-59.297792 101.013504-60.39552 103.901184l-0.745472 1.96608h-27.09504c-22.31296 0-27.090944-0.19456-27.090944-1.101824z m343.20384-257.24928c-0.274432-0.442368 2.435072-5.863424 6.019072-12.046336 14.180352-24.461312 172.62592-298.496 197.61152-341.77024 14.628864-25.335808 26.916864-46.00832 27.308032-45.942784 0.741376 0.126976 52.96128 88.27904 52.96128 89.40544 0 0.356352-13.846528 24.477696-30.7712 53.602304-17.32608 29.812736-30.580736 53.460992-30.33088 54.110208 0.37888 0.989184 9.345024 1.155072 61.876224 1.155072h61.431808l1.959936 3.03104c1.079296 1.667072 6.750208 11.360256 12.60544 21.540864 5.85728 10.180608 11.1616 19.02592 11.790336 19.654656 1.44384 1.44384 1.439744 1.482752-0.32768 3.219456-0.811008 0.794624-6.88128 10.901504-13.492224 22.45632-6.610944 11.556864-12.402688 21.272576-12.87168 21.592064-0.47104 0.319488-40.33536 0.350208-88.588288 0.069632l-87.73632-0.509952-1.644544 2.3552c-0.905216 1.294336-15.37024 26.083328-32.145408 55.085056l-30.498816 52.729856h-31.715328c-17.444864 0-40.99072 0.237568-52.328448 0.530432-13.4144 0.344064-20.7872 0.247808-21.110784-0.27648z m-273.92-323.29728c-115.451904-0.11264-209.92-0.372736-209.92-0.577536 0-0.2048 11.503616-20.750336 25.561088-45.658112L183.58272 252.60032h62.119936c55.527424 0 62.119936-0.13312 62.119936-1.251328 0-0.688128-13.637632-25.042944-30.304256-54.122496-16.666624-29.079552-30.304256-53.078016-30.304256-53.32992 0-0.251904 5.492736-9.938944 12.20608-21.52448s12.294144-21.663744 12.402688-22.392832c0.176128-1.200128 2.816-1.327104 27.795456-1.327104 15.179776 0 27.572224 0.292864 27.537408 0.649216-0.036864 0.356352 0.45056 1.447936 1.08544 2.424832 0.63488 0.974848 19.994624 34.686976 43.022336 74.911744 23.027712 40.22272 42.41408 73.773056 43.081728 74.5472 1.134592 1.325056 5.220352 1.415168 64.364544 1.415168h63.154176l26.411008 45.35296c14.526464 24.94464 26.2144 45.672448 25.972736 46.063616-0.239616 0.38912-9.781248 0.620544-21.200896 0.509952-11.4176-0.110592-115.22048-0.292864-230.66624-0.405504z"
        fill="#fff"
      />
      <path
        d="M47.198208 489.347072c-12.488704 21.633024-13.70112 23.984128-12.746752 24.735744 0.577536 0.458752 6.51264 10.330112 13.18912 21.938176 6.67648 11.608064 12.320768 21.20704 12.539904 21.334016 0.217088 0.124928 27.82208 0.313344 61.3376 0.417792 33.519616 0.106496 61.427712 0.47104 62.02368 0.817152 0.968704 0.559104-2.21184 6.336512-29.976576 54.423552l-31.059968 53.798912 26.433536 44.77952c14.5408 24.629248 26.587136 44.863488 26.763264 44.965888 0.178176 0.1024 47.630336-81.573888 105.455616-181.501952 23.248896-40.175616 43.446272-75.03872 62.19776-107.401216 47.734784-82.845696 62.83264-109.502464 62.93504-110.862336-2.244608-0.22528-12.576768-0.382976-26.636288-0.442368-8.07936-0.02048-16.01536-0.04096-26.112-0.004096l-51.898368 0.188416-31.58016 54.693888c-29.196288 50.571264-31.63136 54.605824-33.337344 55.00928l-0.047104 0.075776c-0.024576 0.006144-3.321856-0.002048-3.739648 0-8.78592 0.126976-41.887744 0.129024-82.382848-0.02048-46.350336-0.167936-85.22752-0.256-86.390784-0.196608-1.161216 0.06144-2.349056-0.06144-2.64192-0.270336-0.288768-0.208896-6.73792 10.375168-14.327808 23.52128z m420.16768-389.7344c-0.251904 0.305152 11.50976 21.282816 26.134528 46.618624 24.9856 43.276288 183.076864 317.50144 197.173248 342.016 3.078144 5.351424 5.98016 9.836544 7.051264 10.952704 1.8432-2.557952 7.233536-11.53024 16.289792-27.072512a2750.21824 2750.21824 0 0 1 20.5824-36.37248l13.529088-23.435264c1.415168-2.873344 1.542144-3.723264 1.335296-4.335616-0.329728-0.98304-14.137344-25.255936-30.683136-53.938176-16.543744-28.68224-30.359552-52.938752-30.69952-53.90336a1.49504 1.49504 0 0 1-0.02048-0.749568l-0.872448-1.869824 44.310528-75.726848c7.55712-12.916736 13.1584-22.614016 19.396608-33.36192 18.755584-32.661504 24.649728-43.395072 24.36096-44.1344-0.258048-0.663552-5.5296-9.89184-11.71456-20.514816-6.187008-10.61888-11.97056-20.783104-12.8512-22.581248-0.989184-2.021376-1.503232-2.793472-2.2528-2.981888-0.110592 0.028672-0.169984 0.036864-0.294912 0.07168-0.86016 0.229376-11.17184 0.39936-22.91712 0.37888-11.743232-0.02048-22.97856 0.049152-24.958976 0.149504l-3.60448 0.182272-30.715904 53.202944c-26.263552 45.490176-30.892032 53.174272-31.93856 53.008384-0.049152-0.008192-0.3072-0.387072-0.48128-0.616448-0.223232 0.135168-0.4096 0.18432-0.555008 0.1024-0.524288-0.303104-14.630912-24.375296-31.346688-53.491712L572.2112 99.977216c-0.237568-0.380928-0.909312-1.523712-0.937984-1.540096-0.974848-0.5632-103.428096 0.587776-103.909376 1.16736z m-38.187008 579.76832c-0.096256 0.223232-0.053248 0.536576 0.088064 0.98304 0.671744 2.1504 51.892224 89.56928 52.781056 90.08128 0.421888 0.243712 29.036544 0.489472 63.5904 0.544768 54.5792 0.090112 62.973952 0.311296 63.967232 1.703936 0.628736 0.88064 20.453376 35.254272 44.058624 76.382208s43.319296 75.012096 43.814912 75.298816c0.493568 0.28672 12.136448 0.497664 25.872384 0.47104 13.73184-0.026624 25.3952 0.202752 25.921536 0.503808 0.268288 0.155648 0.780288-0.288768 1.742848-1.62816l12.304384-21.311488c10.719232-18.56512 13.55776-23.928832 12.890112-24.346624-1.1776-0.73728-31.942656-54.564864-48.863232-84.955136-6.32832-11.1616-10.99776-19.488768-11.14112-20.017152-0.401408-1.458176-0.135168-1.683456 2.36544-2.00704 4.005888-0.516096 117.549056-0.116736 118.929408 0.41984 0.485376 0.188416 1.61792-1.165312 5.310464-7.161856 3.821568-6.281216 10.30144-17.457152 22.530048-38.637568 14.78656-25.61024 26.712064-46.661632 26.503168-46.782464-0.208896-0.120832-1.57696-0.104448-3.049472 0.032768l-0.094208 0.002048c-9.115648 0.417792-69.464064 0.415744-306.66752 0.0512-79.79008-0.12288-142.921728-0.18432-147.275776-0.147456-2.29376 0.02048-4.29056 0.155648-5.44768 0.352256a0.512 0.512 0 0 0-0.126976 0.169984z"
        fill="#fff"
      />
    </svg>
  );
}
