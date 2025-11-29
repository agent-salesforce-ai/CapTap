import Button from "../Button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-700 text-white py-16 md:py-24">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Fast Business Funding{" "}
              <span className="text-secondary-300">When You Need It</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-lg mx-auto md:mx-0">
              Get up to $500,000 in as little as 24-48 hours. No collateral required. 
              All credit types welcome.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button href="/apply" variant="primary" size="lg">
                Apply Now - It&apos;s Free
              </Button>
              <Button href="/how-it-works" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                See How It Works
              </Button>
            </div>
            <p className="text-sm text-primary-200 mt-6">
              ✓ No impact to credit score to apply
            </p>
          </div>

          {/* Illustration */}
          <div className="hidden md:flex justify-center">
            <div className="relative">
              {/* Abstract finance illustration */}
              <div className="w-80 h-80 bg-secondary/20 rounded-full absolute -top-10 -right-10 animate-pulse"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-primary-100">Funding Amount</span>
                    <span className="text-2xl font-bold">$150,000</span>
                  </div>
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-secondary rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary-200">Approved in</span>
                    <span className="text-secondary-300 font-semibold">24 hours</span>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-300 text-sm font-medium">Funds on the way</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
