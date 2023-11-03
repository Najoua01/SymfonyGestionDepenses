<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DepenseController extends AbstractController
{
    #[Route('/depense', name: 'app_depense')]
    public function index(): Response
    {
        return $this->render('depense/index.html.twig', [
            'controller_name' => 'DepenseController',
        ]);
    }
}
