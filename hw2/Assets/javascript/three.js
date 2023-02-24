// Still in progress
//
// Not part of project yet
//


/*
<article class="hidden">
    <div class="p-5 mb-4 bg-dark rounded-3 text-white">
        <canvas id="c"></canvas>

        <script type="module">
        */
            //testing the use of three js in the site, coud be cool eventually      
        const material = new THREE.MeshBasicMaterial({color: 0x44aa88});

            import * as THREE from 'three';
            import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
            function main() {
                    const canvas = document.querySelector('#c');
            const renderer = new THREE.WebGLRenderer({canvas});
            const fov = 75;
            const aspect = 2;  // the canvas default
            const near = 0.1;
            const far = 5;
            const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
            camera.position.z = 2;
            const scene = new THREE.Scene();
            const boxWidth = 1;
            const boxHeight = 1;
            const boxDepth = 1;
            const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
            const material = new THREE.MeshBasicMaterial({color: 0x44aa88 });
            const cube = new THREE.Mesh(geometry, material);
            scene.add(cube);
            renderer.render(scene, camera);
            function render(time) {
                time *= 0.001;  // convert time to seconds

            cube.rotation.x = time;
            cube.rotation.y = time;

            renderer.render(scene, camera);

            requestAnimationFrame(render);
    }
            requestAnimationFrame(render);
}

/*
        </script>
    </div>
</article>
*/