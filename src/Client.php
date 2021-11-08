<?php

namespace Notion;

use Http\Discovery\Psr17FactoryDiscovery;
use Http\Discovery\Psr18ClientDiscovery;
use Notion\Databases\Client as DatabasesClient;
use Notion\Pages\Client as PagesClient;
use Notion\Users\Client as UsersClient;
use Psr\Http\Client\ClientInterface;
use Psr\Http\Message\RequestFactoryInterface;

class Client
{
    public const NOTION_VERSION = "2021-08-16";

    private ClientInterface $psrClient;
    private RequestFactoryInterface $requestFactory;
    private string $token;

    private function __construct(
        ClientInterface $psrClient,
        RequestFactoryInterface $requestFactory,
        string $token,
    ) {
        $this->psrClient = $psrClient;
        $this->requestFactory = $requestFactory;
        $this->token = $token;
    }

    public static function create(string $token): self
    {
        $psrClient = self::resolvePsrClient();
        $requestFactory = Psr17FactoryDiscovery::findRequestFactory();

        return new self($psrClient, $requestFactory, $token);
    }

    public static function createWithPsrImplementations(
        ClientInterface $psrClient,
        RequestFactoryInterface $requestFactory,
        string $token,
    ): self {
        return new self($psrClient, $requestFactory, $token);
    }

    public function users(): UsersClient
    {
        return new UsersClient(
            $this->psrClient,
            $this->requestFactory,
            $this->token,
            self::NOTION_VERSION
        );
    }

    public function pages(): PagesClient
    {
        return new PagesClient(
            $this->psrClient,
            $this->requestFactory,
            $this->token,
            self::NOTION_VERSION
        );
    }

    public function databases(): DatabasesClient
    {
        return new DatabasesClient(
            $this->psrClient,
            $this->requestFactory,
            $this->token,
            self::NOTION_VERSION,
        );
    }

    private static function resolvePsrClient(): ClientInterface
    {
        if (class_exists(GuzzleClient::class)) {
            return new GuzzleClient();
        }

        if (class_exists(SymfonyClient::class)) {
            return new SymfonyClient();
        }

        throw new \Exception(
            "You cannot use 'Notion\\Client' as no PSR-18 has been found. " .
            "Try running 'composer require guzzlehttp/guzzle'."
        );
    }
}
