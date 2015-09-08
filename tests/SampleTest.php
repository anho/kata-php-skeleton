<?php

namespace Kata\Tests;

use Kata\Sample;

class SampleTest extends \PHPUnit_Framework_TestCase
{
    public function testIsTrue()
    {
        $sample = new Sample();

        self::assertTrue($sample->isTrue());
    }
}
