"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Home">
                    </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="Our Courses">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/all_courses">All Courses</HoveredLink>
                        <HoveredLink href="/basic_music_theory">Basic Music Theory</HoveredLink>
                        <HoveredLink href="/another_composition">Another Composition</HoveredLink>
                        <HoveredLink href="/song_writing">Song Writing</HoveredLink>
                        <HoveredLink href="/music_production">Music Production</HoveredLink>
                    </div>
                </MenuItem>
                <Link href={"/contact_us"}>
                    <MenuItem setActive={setActive} active={active} item="Contact Us">
                    </MenuItem>
                </Link>
            </Menu>
        </div>
    );
}


export default Navbar;