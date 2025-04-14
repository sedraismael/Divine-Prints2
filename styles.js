<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Fingerprint Analyzer</title>
    <style>
        /* Glowing animation */
        @keyframes glowScan {
            0% {
                text-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
                opacity: 0.8;
            }
            50% {
                text-shadow: 0 0 15px currentColor, 0 0 25px currentColor;
                opacity: 1;
            }
            100% {
                text-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
                opacity: 0.8;
            }
        }

        /* Body styling */
        body {
            background-color: #ffc1cc; /* Light pink */
            font-family: 'Times New Roman', Times, serif;
            color: #000; /* Default font color */
            text-align: center;
            padding: 40px;
        }

        /* Title */
        .title {
            font-size: 2.5rem;
            margin-top: 20px;
        }

        /* Description styling */
        .description {
            font-size: 1.2rem;
            margin: 20px 0;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        /* Whorls - scarlet */
        .whorls {
            color: #ff2400;
            font-weight: bold;
            animation: glowScan 2s infinite ease-in-out;
        }

        /* Loops - forest green */
        .loops {
            color: #228B22;
            font-weight: bold;
            animation: glowScan 2s infinite ease-in-out;
        }

        /* Arches - dark blue */
        .arches {
            color: #00008B;
            font-weight: bold;
            animation: glowScan 2s infinite ease-in-out;
        }

        /* Ridges - black */
        .ridges {
            color: #000;
            font-weight: bold;
        }

        /* File input */
        input[type="file"] {
            margin: 20px 0;
        }

        /* Button styling */
        button {
            background-color: #00008B; /* Arches color */
            color: white;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 5px;
            font-size: 1rem;
            font-family: 'Times New Roman', Times, serif;
            transition: background-color 0.3s ease;
        }

        /* Hover state */
        button:hover {
            background-color: #002e6d; /* Darker arches */
        }

        /* Result message */
        #result {
            margin-top: 30px;
            font-size: 1.5rem;
            font-weight: bold;
            color: #ff2400; /* Match whorls */
            animation: glowScan 2s infinite ease-in-out;
        }

        /* Footer styling */
        footer {
            margin-top: 50px;
            font-size: 1rem;
            color: #888;
            font-family: 'Times New Roman', Times, serif;
        }

        footer p {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>

    <h1 class="title">Fingerprint Analyzer</h1>

    <p class="description">
        Detecting fingerprint data: 
        <span class="whorls">Whorls</span>, 
        <span class="loops">Loops</span>, 
        <span class="arches">Arches</span> on 
        <span class="ridges">Ridges</span>.
    </p>

    <input type="file" accept="image/*">
    <br>
    <button>Upload & Scan</button>

    <div id="result">Match Found!</div>

    <footer>
        <p>Fingerprint Analyzer &copy; 2025</p>
        <p>By YourName</p>
    </footer>

</body>
</html>
