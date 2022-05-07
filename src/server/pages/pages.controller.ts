import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class PagesController {
  constructor() {}

  @Get()
  @Render('index')
  home() {
    return;
  }

  @Get()
  @Render('contacts')
  contacts() {
    return;
  }

  @Get('auth/signup')
  @Render('auth/signup')
  authSignup() {
    return;
  }

  @Get(':cat')
  @Render('[cat]')
  category() {
    return;
  }

  @Get(':cat/:prod')
  @Render('[cat]/[prod]')
  product() {
    return;
  }

  @Get(':cat/:prod/feature')
  @Render('[cat]/[prod]/feature')
  productFeature() {
    return;
  }

  @Get(':cat/:prod/review')
  @Render('[cat]/[prod]/review')
  productReview() {
    return;
  }

  @Get(':cat/:prod/spares')
  @Render('[cat]/[prod]/spares')
  productSpares() {
    return;
  }
}
