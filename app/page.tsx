import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Card>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit similique placeat ipsum! Sunt quam inventore unde, officiis ullam porro repellat consequatur ducimus exercitationem voluptatum voluptatem asperiores corporis harum. Quis, cumque?
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href={"/"}>Read More</Link>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit similique placeat ipsum! Sunt quam inventore unde, officiis ullam porro repellat consequatur ducimus exercitationem voluptatum voluptatem asperiores corporis harum. Quis, cumque?
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href={"/"}>Read More</Link>
        </CardFooter>
      </Card>
    </main>
  );
}
