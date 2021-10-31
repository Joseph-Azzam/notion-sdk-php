<?php

namespace Notion\Pages\Properties;

use Notion\Users\User;

/**
 * @psalm-import-type UserJson from \Notion\Users\User
 *
 * @psalm-type PeopleJson = array{
 *      id: string,
 *      type: "people",
 *      people: UserJson[],
 * }
 */
class People implements PropertyInterface
{
    private const TYPE = Property::TYPE_PEOPLE;

    private Property $property;

    /** @var User[] */
    private array $users;

    private function __construct(Property $property, User ...$users)
    {
        $this->property = $property;
        $this->users = $users;
    }

    public static function create(User ...$users): self
    {
        $property = Property::create("", self::TYPE);

        return new self($property, ...$users);
    }

    public static function fromArray(array $array): self
    {
        /** @psalm-var PeopleJson $array */

        $property = Property::fromArray($array);

        $users = array_map(
            function (array $userArray): User {
                return User::fromArray($userArray);
            },
            $array[self::TYPE],
        );

        return new self($property, ...$users);
    }

    public function toArray(): array
    {
        $array = $this->property->toArray();

        $array[self::TYPE] = array_map(
            function (User $user): array {
                return $user->toArray();
            },
            $this->users,
        );

        return $array;
    }

    public function property(): Property
    {
        return $this->property;
    }

    /** @return User[] */
    public function users(): array
    {
        return $this->users;
    }

    public function withPeople(User ...$users): self
    {
        return new self($this->property, ...$users);
    }

    public function addPerson(User $user): self
    {
        $users = $this->users;
        $users[] = $user;

        return new self($this->property, ...$users);
    }
}
