import { FileText, Mail, Globe, Phone } from "lucide-react";

export default function AffiliateProgram() {
    return (
        <div className="bg-[#111827]">
            {/* Header Section */}
            <section className="bg-[#020617] text-white py-20 px-6 text-center">
                <div className="flex justify-center mb-6">
                    <div className="bg-gray-800 p-4 rounded-full">
                        <FileText size={48} className="text-[#D946EF]" />
                    </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Referral & Affiliate Disclosure</h1>
                <p className="text-xl text-gray-200">Transparency Matters to Us</p>
            </section>

            {/* Main Content */}
            <section className="py-20 px-6 max-w-4xl mx-auto text-gray-300 leading-relaxed font-sans">

                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">At Crivient, transparency and trust are important to how we do business.</h2>
                    <p className="mb-4">
                        This page explains how referral links and affiliate relationships work on our website so you can make informed decisions with confidence.
                    </p>
                </div>

                <hr className="border-gray-700 my-8" />

                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">Our Referral Relationships</h2>
                    <p className="mb-4">
                        Some of the software products, tools, or services featured, recommended, or linked to on our website are provided by third-party companies. We may have referral, partnership, or affiliate relationships with these companies.
                    </p>
                    <p className="mb-4">
                        This means that if you click on a referral link and make a purchase or sign up for a service, we may earn a commission or referral fee.
                    </p>
                </div>

                <hr className="border-gray-700 my-8" />

                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">No Extra Cost to You</h2>
                    <p className="mb-4">
                        Any commission we receive comes at no additional cost to you. The price you pay remains the same whether you use our referral links or go directly to the provider’s website.
                    </p>
                </div>

                <hr className="border-gray-700 my-8" />

                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">Why We Use Referral Links</h2>
                    <p className="mb-4">The commissions we earn help us to:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Support and maintain our SaaS CRM platform</li>
                        <li>Improve features and customer experience</li>
                        <li>Provide educational content, integrations, and recommendations</li>
                        <li>Keep our services accessible and competitively priced</li>
                    </ul>
                </div>

                <hr className="border-gray-700 my-8" />

                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">Our Commitment to Honest Recommendations</h2>
                    <p className="mb-4">
                        We only recommend software, tools, and services that we believe may provide value to our clients. However:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>We do not guarantee results or outcomes</li>
                        <li>Third-party products are subject to their own terms, pricing, and policies</li>
                        <li>You should always evaluate whether a product is right for your specific needs</li>
                    </ul>
                    <p className="mt-4">
                        Our opinions and recommendations are our own and are not influenced solely by compensation.
                    </p>
                </div>

                <hr className="border-gray-700 my-8" />

                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">Third-Party Responsibility</h2>
                    <p className="mb-4">Crivient is not responsible for:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>The performance or availability of third-party products</li>
                        <li>Any issues arising from your use of third-party services</li>
                        <li>Changes in pricing, features, or policies made by third-party providers</li>
                    </ul>
                    <p className="mt-4">
                        Please review the third party’s terms and privacy policies before making a purchase.
                    </p>
                </div>

                <hr className="border-gray-700 my-8" />

                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">Questions or Concerns</h2>
                    <p className="mb-4">
                        If you have any questions about this disclosure or our referral relationships, please contact us at:
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3">
                            <Mail className="text-[#D946EF]" size={20} />
                            <span>Email: <a href="mailto:support@crivient.cloud" className="text-[#D946EF] hover:underline">support@crivient.cloud</a></span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="text-[#D946EF]" size={20} />
                            <span>Phone: +91 9251011591</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <BriefcaseIcon />
                            <span>Company: Crivient</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Globe className="text-[#D946EF]" size={20} />
                            <span>Website: <a href="https://crivient.cloud" target="_blank" rel="noopener noreferrer" className="text-[#D946EF] hover:underline">https://crivient.cloud</a></span>
                        </li>
                    </ul>
                </div>

            </section>
        </div>
    );
}

function BriefcaseIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D946EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
    )
}
