'use client'
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const WebGLBackground = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Create interactive particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 3000;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    const velocities = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 30;
      positions[i + 1] = (Math.random() - 0.5) * 30;
      positions[i + 2] = (Math.random() - 0.5) * 30;
      
      // Blue to purple gradient
      const colorValue = Math.random();
      colors[i] = 0.2 + colorValue * 0.3; // R
      colors[i + 1] = 0.4 + colorValue * 0.4; // G
      colors[i + 2] = 0.8 + colorValue * 0.2; // B
      
      velocities[i] = (Math.random() - 0.5) * 0.02;
      velocities[i + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i + 2] = (Math.random() - 0.5) * 0.02;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 1.0,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Create multiple interactive meshes - LARGER and MORE VISIBLE
    const meshes = [];
    for (let i = 0; i < 3; i++) {
      const geometry = new THREE.IcosahedronGeometry(1.2 + i * 0.5, 0);
      const material = new THREE.MeshStandardMaterial({
        color: i === 0 ? 0x3b82f6 : i === 1 ? 0x8b5cf6 : 0xec4899,
        wireframe: true,
        transparent: true,
        opacity: 0.6 + i * 0.15,
        metalness: 0.9,
        roughness: 0.1,
        emissive: i === 0 ? 0x1e40af : i === 1 ? 0x6d28d9 : 0xdb2777,
        emissiveIntensity: 0.3
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = (i - 1) * 3;
      mesh.position.z = -2 + i * 0.5;
      scene.add(mesh);
      meshes.push(mesh);
    }

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x3b82f6, 2, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x8b5cf6, 2, 100);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xec4899, 1.5, 100);
    pointLight3.position.set(0, 0, 5);
    scene.add(pointLight3);

    // Mouse interaction
    const handleMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate and interact with meshes
      meshes.forEach((mesh, index) => {
        mesh.rotation.x += 0.003 + index * 0.002;
        mesh.rotation.y += 0.005 + index * 0.003;
        
        // Mouse interaction
        const targetX = (mouseRef.current.x * (2 + index)) - (index - 1) * 2;
        const targetY = mouseRef.current.y * (2 + index);
        mesh.position.x += (targetX - mesh.position.x) * 0.03;
        mesh.position.y += (targetY - mesh.position.y) * 0.03;
      });

      // Rotate particles
      particles.rotation.y += 0.001;
      particles.rotation.x += 0.0005;

      // Update particle positions with mouse interaction and movement
      const positions = particlesGeometry.attributes.position.array;
      const time = Date.now() * 0.0005;
      
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        
        // Mouse attraction - STRONGER
        const mouseInfluence = 0.05;
        positions[i3] += (mouseRef.current.x * 5 - positions[i3]) * mouseInfluence;
        positions[i3 + 1] += (mouseRef.current.y * 5 - positions[i3 + 1]) * mouseInfluence;
        
        // Add subtle floating motion
        positions[i3] += Math.sin(time + i) * 0.001;
        positions[i3 + 1] += Math.cos(time + i) * 0.001;
        positions[i3 + 2] += Math.sin(time * 0.5 + i) * 0.001;
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      // Update lights based on mouse - MORE DRAMATIC
      pointLight.position.x = mouseRef.current.x * 8;
      pointLight.position.y = mouseRef.current.y * 8;
      pointLight.intensity = 2 + Math.abs(mouseRef.current.x) * 1;
      
      pointLight2.position.x = -mouseRef.current.x * 8;
      pointLight2.position.y = -mouseRef.current.y * 8;
      pointLight2.intensity = 2 + Math.abs(mouseRef.current.y) * 1;
      
      pointLight3.position.x = mouseRef.current.x * 3;
      pointLight3.position.y = mouseRef.current.y * 3;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    sceneRef.current = scene;

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      meshes.forEach(mesh => {
        mesh.geometry.dispose();
        mesh.material.dispose();
      });
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} />;
};

export default WebGLBackground;

