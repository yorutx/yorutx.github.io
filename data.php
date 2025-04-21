<?php
$data = json_decode(file_get_contents("php://input"), true);
$film = $data['film'];
$rating = (int) $data['rating'];

// Connexion BDD
require 'config.php';
$stmt = $pdo->prepare("INSERT INTO votes (film, rating) VALUES (?, ?)");
$stmt->execute([$film, $rating]);
