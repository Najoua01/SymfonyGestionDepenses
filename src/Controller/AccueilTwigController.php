<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AccueilTwigController extends AbstractController
{
    #[Route('/accueil/twig', name: 'app_accueil_twig')]
    public function index(): Response
    {
        // Exemple de données pour $calendrierJSON
        $calendrierJSON = json_encode(['event1', 'event2', 'event3']);

        return $this->render('accueil_twig/index.html.twig', [
            'evenementsJSON' => $calendrierJSON,
        ]);
    }
}
